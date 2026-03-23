// --- STATE & DATA ---
const mockEmployees = [
    { id: 'EMP001', name: 'Kamal Silva', nic: '19851234567V', role: 'Supervisor', site: 'Office Block A', status: 'Active', payroll: { basic: 45000, otHours: 12, otRate: 250, deductions: 1500 } },
    { id: 'EMP002', name: 'Nimal Perera', nic: '19901234567V', role: 'Cleaner', site: 'Apartment Complex B', status: 'Active', payroll: { basic: 35000, otHours: 8, otRate: 250, deductions: 1500 } },
    { id: 'EMP003', name: 'Sunita Menike', nic: '19821234567V', role: 'Cleaner', site: 'City Mall', status: 'Active', payroll: { basic: 35000, otHours: 0, otRate: 250, deductions: 1500 } },
    { id: 'EMP004', name: 'Ruwan Kumara', nic: '19951234567V', role: 'Utility Staff', site: 'City Mall', status: 'On Leave', payroll: { basic: 35000, otHours: 0, otRate: 250, deductions: 1500 } },
    { id: 'EMP005', name: 'Saman Kumara', nic: '19911234567V', role: 'Cleaner', site: 'Tech Park Z', status: 'Active', payroll: { basic: 35000, otHours: 15, otRate: 250, deductions: 1500 } },
];

// --- ROUTING SYSTEM (Hash-Based for Local File Support) ---
function navigate(hashPath) {
    if (!hashPath.startsWith('#')) {
        hashPath = '#' + hashPath;
    }
    window.location.hash = hashPath;
}

function handleRoute() {
    let hash = window.location.hash;
    // Handle root / empty hash
    if (!hash || hash === '#') {
        hash = '#/';
    }
    
    const view = routes[hash] || routes['#/'];
    view();
    
    if (window.lucide) {
        lucide.createIcons();
    }
}

window.openPayrollModal = function(id) {
    const emp = mockEmployees.find(e => e.id === id);
    if (!emp) return;
    
    let modal = document.getElementById('payroll-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'payroll-modal';
        modal.style = "position: fixed; inset: 0; background: rgba(15,23,42,0.8); backdrop-filter: blur(4px); z-index: 100; display: flex; align-items: center; justify-content: center;";
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="glass-card animate-slide-up" style="width: 100%; max-width: 400px; padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-glass); padding-bottom: 1rem;">
                <h3 style="font-size: 1.25rem;">Edit Payroll: ${emp.id}</h3>
                <button type="button" onclick="document.getElementById('payroll-modal').remove()" class="icon-btn"><i data-lucide="x"></i></button>
            </div>
            <form id="payroll-form">
                <input type="hidden" id="pay-id" value="${emp.id}" />
                <div class="form-group">
                    <label class="form-label">Basic Pay (Rs.)</label>
                    <input type="number" id="pay-basic" class="form-input" value="${emp.payroll.basic}" style="padding-left: 1rem;" required />
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label class="form-label">OT Hours</label>
                        <input type="number" id="pay-othours" class="form-input" value="${emp.payroll.otHours}" style="padding-left: 1rem;" required />
                    </div>
                    <div class="form-group">
                        <label class="form-label">OT Rate (Rs.)</label>
                        <input type="number" id="pay-otrate" class="form-input" value="${emp.payroll.otRate}" style="padding-left: 1rem;" required />
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Deductions (Rs.)</label>
                    <input type="number" id="pay-deductions" class="form-input" value="${emp.payroll.deductions}" style="padding-left: 1rem;" required />
                </div>
                <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem;">
                    <button type="button" class="btn" onclick="document.getElementById('payroll-modal').remove()" style="background: transparent; border: 1px solid var(--border-glass); color: var(--text-main);">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>
    `;
    
    if (window.lucide) lucide.createIcons();
    
    document.getElementById('payroll-form').addEventListener('submit', e => {
        e.preventDefault();
        const tid = document.getElementById('pay-id').value;
        const target = mockEmployees.find(t => t.id === tid);
        if (target) {
            target.payroll.basic = parseFloat(document.getElementById('pay-basic').value) || 0;
            target.payroll.otHours = parseFloat(document.getElementById('pay-othours').value) || 0;
            target.payroll.otRate = parseFloat(document.getElementById('pay-otrate').value) || 0;
            target.payroll.deductions = parseFloat(document.getElementById('pay-deductions').value) || 0;
        }
        document.getElementById('payroll-modal').remove();
        if (window.location.hash.includes('payroll')) {
            renderPayroll();
            if (window.lucide) lucide.createIcons();
        }
    });
};

window.downloadPayslip = function(id) {
    const emp = mockEmployees.find(e => e.id === id);
    if (!emp) return;
    
    const otPay = emp.payroll.otHours * emp.payroll.otRate;
    const netPay = emp.payroll.basic + otPay - emp.payroll.deductions;
    
    const payslipHTML = `
        <html>
        <head>
            <title>Payslip - ${emp.id}</title>
            <style>
                body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; padding: 40px; }
                .header { text-align: center; border-bottom: 2px solid #06b6d4; padding-bottom: 20px; margin-bottom: 30px; }
                .header h1 { margin: 0; color: #0f172a; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
                .header p { margin: 5px 0 0; color: #64748b; font-size: 14px; }
                .details { display: flex; justify-content: space-between; margin-bottom: 30px; }
                .details div { width: 48%; }
                .title { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; }
                .value { font-size: 16px; font-weight: 500; margin-bottom: 10px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
                th, td { border: 1px solid #e2e8f0; padding: 12px 15px; text-align: left; }
                th { background-color: #f8fafc; color: #475569; font-weight: bold; text-transform: uppercase; font-size: 13px; }
                .amount { text-align: right; }
                .total-row { background-color: #f1f5f9; font-weight: bold; }
                .net-pay { font-size: 18px; color: #10b981; }
                .footer { text-align: center; color: #94a3b8; font-size: 12px; margin-top: 50px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>JS Janitorial Service</h1>
                <p style="margin: 0; color: #64748b; font-size: 13px;">No 79 Sumithrarama Mawatha, Kotahena, Colombo 13</p>
                <p style="margin-top: 15px; font-weight: bold; color: #333;">Monthly Salary Statement - March 2026</p>
            </div>
            <div class="details">
                <div>
                    <div class="title">Employee ID</div><div class="value">${emp.id}</div>
                    <div class="title">Employee Name</div><div class="value">${emp.name}</div>
                </div>
                <div>
                    <div class="title">Designation</div><div class="value">${emp.role}</div>
                    <div class="title">Assigned Site</div><div class="value">${emp.site}</div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Earnings / Deductions</th>
                        <th class="amount">Amount (Rs)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Basic Pay</td>
                        <td class="amount">${emp.payroll.basic.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Overtime (${emp.payroll.otHours} hrs @ Rs. ${emp.payroll.otRate})</td>
                        <td class="amount">${otPay.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="color: #ef4444;">Deductions (EPF/ETF/Advance)</td>
                        <td class="amount" style="color: #ef4444;">-${emp.payroll.deductions.toLocaleString()}</td>
                    </tr>
                    <tr class="total-row">
                        <td>Net Salary Payable</td>
                        <td class="amount net-pay">${netPay.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
            <div class="footer">
                <p>This is a computer-generated document. No signature is required.</p>
                <p>Generated on ${new Date().toLocaleDateString()}</p>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(function(){ window.close(); }, 500);
                }
