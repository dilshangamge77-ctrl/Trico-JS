import { renderLayout } from '../components/layout.js';

// Mock Employees Database Array
export const mockEmployees = [
    { id: 'EMP001', name: 'Kamal Silva', nic: '19851234567V', role: 'Supervisor', site: 'Office Block A', status: 'Active' },
    { id: 'EMP002', name: 'Nimal Perera', nic: '19901234567V', role: 'Cleaner', site: 'Apartment Complex B', status: 'Active' },
    { id: 'EMP003', name: 'Sunita Menike', nic: '19821234567V', role: 'Cleaner', site: 'City Mall', status: 'Active' },
    { id: 'EMP004', name: 'Ruwan Kumara', nic: '19951234567V', role: 'Utility Staff', site: 'City Mall', status: 'On Leave' },
    { id: 'EMP005', name: 'Saman Kumara', nic: '19911234567V', role: 'Cleaner', site: 'Tech Park Z', status: 'Active' },
];

export function renderStaffRegister() {
    const root = document.getElementById('app-root');
    
    // Generate Table Rows
    let tableRows = mockEmployees.map(emp => {
        const initials = emp.name.split(' ').map(n=>n[0]).join('');
        const statusColor = emp.status === 'Active' ? 'var(--success)' : 'var(--warning)';
        const statusBg = emp.status === 'Active' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)';
        const avatarBg = emp.status === 'Active' ? 'var(--primary)' : 'var(--warning)';
        
        return `
            <tr style="border-bottom: 1px solid var(--border-glass); transition: background var(--transition-fast);">
                <td style="padding: 1rem 0.5rem; font-weight: 500;">
                    <a href="#" style="color: var(--text-main);">${emp.id}</a>
                </td>
                <td style="padding: 1rem 0.5rem; display: flex; align-items: center; gap: 0.75rem;">
                    <div class="avatar" style="width: 32px; height: 32px; font-size: 0.8rem; background: ${avatarBg}; color: ${emp.status==='Active' ? 'white' : '#000'};">${initials}</div>
                    <span style="font-weight: 500;">${emp.name}</span>
                </td>
                <td style="padding: 1rem 0.5rem; color: var(--text-muted);">${emp.nic}</td>
                <td style="padding: 1rem 0.5rem; color: var(--text-muted);">${emp.role}</td>
                <td style="padding: 1rem 0.5rem; color: var(--text-muted);">${emp.site}</td>
                <td style="padding: 1rem 0.5rem;">
                    <span style="background: ${statusBg}; color: ${statusColor}; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">
                        ${emp.status}
                    </span>
                </td>
                <td style="padding: 1rem 0.5rem; text-align: right;">
                    <button class="icon-btn" title="Edit Staff Member" style="display: inline-flex;"><i data-lucide="edit-3" style="width: 16px; height: 16px;"></i></button>
                    <button class="icon-btn" title="View Profile" style="display: inline-flex;"><i data-lucide="external-link" style="width: 16px; height: 16px;"></i></button>
                </td>
            </tr>
        `;
    }).join('');

    const content = `
        <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
                <h1 style="font-size: 1.8rem; margin-bottom: 0.25rem;">Staff Registry</h1>
                <p style="color: var(--text-muted);">Manage all cleaning operations personnel and details.</p>
            </div>
            <a href="/staff/new" data-link class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                <i data-lucide="user-plus" style="width: 16px; height: 16px;"></i> 
                <span>Register Staff</span>
            </a>
        </div>

        <div class="glass-card" style="padding: 1.5rem 2rem; background: var(--bg-surface);">
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: space-between;">
                <div class="header-search" style="flex: 1; max-width: 400px; width: 100%;">
                    <i data-lucide="search" class="input-icon" style="left: 0.75rem; top: 50%; transform: translateY(-50%); position: absolute; z-index:2; pointer-events: none;"></i>
                    <input type="text" placeholder="Search by name, NIC, or Employee ID..." class="search-input" style="background: rgba(15,23,42,0.8); width: 100%; border-radius: var(--radius-md);" />
                </div>
                
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn" style="background: rgba(255,255,255,0.05); color: var(--text-main); border: 1px solid var(--border-glass); padding: 0.5rem 1rem; font-size: 0.9rem;">
                        <i data-lucide="filter" style="width: 16px; height: 16px;"></i> Filter
                    </button>
                    <button class="btn" style="background: rgba(255,255,255,0.05); color: var(--text-main); border: 1px solid var(--border-glass); padding: 0.5rem 1rem; font-size: 0.9rem;">
                        <i data-lucide="download" style="width: 16px; height: 16px;"></i> Export
                    </button>
                </div>
            </div>

            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 800px;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-glass); color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">
                            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Emp ID</th>
                            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Employee Name</th>
                            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">NIC Number</th>
                            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Designation</th>
                            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Assigned Site</th>
                            <th style="padding: 0.75rem 0.5rem; font-weight: 600;">Status</th>
                            <th style="padding: 0.75rem 0.5rem; font-weight: 600; text-align: right;">Actions</th>
                        </tr>
                    </thead>
                    <tbody style="font-size: 0.95rem;">
                        ${tableRows}
                    </tbody>
                </table>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; padding-top: 1rem; font-size: 0.85rem; color: var(--text-muted);">
                <div>Showing 1 to ${mockEmployees.length} of 124 entries</div>
                <div style="display: flex; gap: 0.25rem;">
                    <button class="btn" style="padding: 0.25rem 0.6rem; background: transparent; border: 1px solid var(--border-glass); color: var(--text-muted); border-radius: var(--radius-sm);" disabled>Prev</button>
                    <button class="btn" style="padding: 0.25rem 0.6rem; background: var(--primary); border: 1px solid var(--primary); color: white; border-radius: var(--radius-sm);">1</button>
                    <button class="btn" style="padding: 0.25rem 0.6rem; background: transparent; border: 1px solid var(--border-glass); color: var(--text-muted); border-radius: var(--radius-sm);">2</button>
                    <button class="btn" style="padding: 0.25rem 0.6rem; background: transparent; border: 1px solid var(--border-glass); color: var(--text-muted); border-radius: var(--radius-sm);">3</button>
                    <span style="display: inline-flex; align-items: center; padding: 0 0.25rem;">...</span>
                    <button class="btn" style="padding: 0.25rem 0.6rem; background: transparent; border: 1px solid var(--border-glass); color: var(--text-muted); border-radius: var(--radius-sm);">Next</button>
                </div>
            </div>
        </div>
    `;

    root.innerHTML = renderLayout(content, 'staff');
}
