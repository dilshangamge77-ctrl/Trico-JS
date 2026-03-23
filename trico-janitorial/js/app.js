// --- STATE & DATA ---
const mockEmployees = [
    { id: 'EMP001', name: 'Kamal Silva', nic: '19851234567V', role: 'Supervisor', site: 'Office Block A', status: 'Active' },
    { id: 'EMP002', name: 'Nimal Perera', nic: '19901234567V', role: 'Cleaner', site: 'Apartment Complex B', status: 'Active' },
    { id: 'EMP003', name: 'Sunita Menike', nic: '19821234567V', role: 'Cleaner', site: 'City Mall', status: 'Active' },
    { id: 'EMP004', name: 'Ruwan Kumara', nic: '19951234567V', role: 'Utility Staff', site: 'City Mall', status: 'On Leave' },
    { id: 'EMP005', name: 'Saman Kumara', nic: '19911234567V', role: 'Cleaner', site: 'Tech Park Z', status: 'Active' },
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

// --- COMPONENTS ---
function renderLayout(contentHTML, activeMenu = 'dashboard') {
    return `
        <div class="app-container">
            <!-- Navigation Sidebar -->
            <aside class="sidebar">
                <div class="sidebar-header">
                    <div style="width: 32px; height: 32px; background: rgba(6, 182, 212, 0.15); border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
                        <i data-lucide="sparkles" style="color: var(--primary); width: 18px; height: 18px;"></i>
                    </div>
                    <h3 style="font-size: 1.25rem; font-weight: 700; margin-left: 0.75rem; letter-spacing: -0.5px;">Trico Sys</h3>
                </div>
                
                <nav class="sidebar-nav">
                    <p style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; padding: 0 1rem; margin-top: 0.5rem; margin-bottom: 0.25rem;">Main</p>
                    
                    <a href="#/dashboard" data-link class="nav-item ${activeMenu === 'dashboard' ? 'active' : ''}">
                        <i data-lucide="layout-dashboard" style="width: 20px; height: 20px;"></i>
                        <span>Dashboard</span>
                    </a>
                    <a href="#/staff" data-link class="nav-item ${activeMenu === 'staff' ? 'active' : ''}">
                        <i data-lucide="users" style="width: 20px; height: 20px;"></i>
                        <span>Staff Register</span>
                    </a>
                    
                    <p style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; padding: 0 1rem; margin-top: 1.5rem; margin-bottom: 0.25rem;">Operations</p>
                    
                    <a href="#" class="nav-item">
                        <i data-lucide="box" style="width: 20px; height: 20px;"></i>
                        <span>Inventory</span>
                    </a>
                </nav>
                
                <div class="sidebar-footer" style="padding-top: 1rem; border-top: 1px solid var(--border-glass);">
                    <a href="#/" data-link class="nav-item text-danger">
                        <i data-lucide="log-out" style="width: 20px; height: 20px;"></i>
                        <span>Sign Out</span>
                    </a>
                </div>
            </aside>

            <!-- Main Content Area Wrapper -->
            <main class="main-content">
                <!-- Top Header -->
                <header class="top-header">
                    <div class="header-search">
                        <i data-lucide="search" class="input-icon" style="left: 0.75rem;"></i>
                        <input type="text" placeholder="Search anything (Ctrl+K)" class="search-input" />
                    </div>
                    
                    <div class="header-actions">
                        <button class="icon-btn" title="Add New">
                            <i data-lucide="plus" style="width: 20px; height: 20px;"></i>
                        </button>
                        <div class="user-profile">
                            <div class="avatar" style="border: 2px solid var(--primary);">AU</div>
                            <div class="user-info">
                                <span class="user-name">Admin User</span>
                                <span class="user-role" style="color: var(--primary);">Administrator</span>
                            </div>
                        </div>
                    </div>
                </header>

                <!-- Dynamic Page Content -->
                <div class="page-content animate-fade-in">
                    ${contentHTML}
                </div>
            </main>
        </div>
    `;
}

// --- VIEWS ---
function renderLogin() {
    const root = document.getElementById('app-root');
    
    root.innerHTML = `
        <div class="auth-container">
            <!-- Animated Background Abstract Shapes -->
            <div class="bg-shape bg-shape-1"></div>
            <div class="bg-shape bg-shape-2"></div>

            <div class="glass-card animate-slide-up" style="width: 100%; max-width: 420px;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="width: 56px; height: 56px; background: rgba(6, 182, 212, 0.15); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                        <i data-lucide="sparkles" style="color: var(--primary); width: 28px; height: 28px;"></i>
                    </div>
                    <h2 style="font-size: 1.75rem; letter-spacing: -0.5px; margin-bottom: 0.5rem;">Trico Janitorial</h2>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Enter your credentials to access the system</p>
                </div>
                
                <form id="login-form">
                    <div class="form-group">
                        <label class="form-label" for="username">Username</label>
                        <div class="input-wrapper">
                            <input type="text" id="username" class="form-input" placeholder="e.g. admin" required autocomplete="username" />
                            <i data-lucide="user" class="input-icon"></i>
                        </div>
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 2rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <label class="form-label" for="password">Password</label>
                        </div>
                        <div class="input-wrapper">
                            <input type="password" id="password" class="form-input" placeholder="••••••••" required autocomplete="current-password" />
                            <i data-lucide="lock" class="input-icon"></i>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <span>Sign In</span>
                        <i data-lucide="arrow-right" style="width: 18px; height: 18px;"></i>
                    </button>
                </form>
            </div>
        </div>
    `;

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerHTML = \`<i data-lucide="loader-2" class="animate-spin" style="width: 20px; height: 20px;"></i> <span>Authenticating...</span>\`;
        if (window.lucide) lucide.createIcons();
        btn.style.opacity = '0.9';
        btn.disabled = true;
        
        setTimeout(() => {
            navigate('#/dashboard');
        }, 1200);
    });
}

function renderDashboard() {
    const root = document.getElementById('app-root');
    const content = `
        <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
                <h1 style="font-size: 1.8rem; margin-bottom: 0.25rem;">Dashboard Overview</h1>
                <p style="color: var(--text-muted);">Welcome back, here's what's happening today.</p>
            </div>
            <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                <i data-lucide="plus" style="width: 16px; height: 16px;"></i>
                <span>New Assignment</span>
            </button>
        </div>

        <div class="grid-cards">
            <div class="stat-card">
                <div class="stat-icon cyan"><i data-lucide="users"></i></div>
                <div class="stat-info">
                    <h4>Total Staff</h4>
                    <h2>124</h2>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green"><i data-lucide="check-circle-2"></i></div>
                <div class="stat-info">
                    <h4>Present Today</h4>
                    <h2>112</h2>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon blue"><i data-lucide="building-2"></i></div>
                <div class="stat-info">
                    <h4>Active Sites</h4>
                    <h2>18</h2>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
            <div class="glass-card" style="padding: 1.5rem; background: var(--bg-surface);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.1rem; font-weight: 600;">Recent Attendance Updates</h3>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-glass); color: var(--text-muted); font-size: 0.85rem;">
                            <th style="padding-bottom: 0.75rem; font-weight: 500;">Employee Name</th>
                            <th style="padding-bottom: 0.75rem; font-weight: 500;">Site Assignment</th>
                            <th style="padding-bottom: 0.75rem; font-weight: 500;">Time In</th>
                            <th style="padding-bottom: 0.75rem; font-weight: 500;">Status</th>
                        </tr>
                    </thead>
                    <tbody style="font-size: 0.9rem;">
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <td style="padding: 1rem 0; display: flex; align-items: center; gap: 0.75rem;">
                                <div class="avatar" style="width: 28px; height: 28px; font-size: 0.7rem;">KS</div>
                                <span style="font-weight: 500;">Kamal Silva</span>
                            </td>
                            <td style="padding: 1rem 0; color: var(--text-muted);">Office Block A</td>
                            <td style="padding: 1rem 0; color: var(--text-muted);">07:15 AM</td>
                            <td style="padding: 1rem 0;"><span style="background: rgba(16,185,129,0.15); color: var(--success); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">On Time</span></td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <td style="padding: 1rem 0; display: flex; align-items: center; gap: 0.75rem;">
                                <div class="avatar" style="width: 28px; height: 28px; font-size: 0.7rem; background: var(--warning);">NP</div>
                                <span style="font-weight: 500;">Nimal Perera</span>
                            </td>
                            <td style="padding: 1rem 0; color: var(--text-muted);">Apartment Complex B</td>
                            <td style="padding: 1rem 0; color: var(--text-muted);">08:30 AM</td>
                            <td style="padding: 1rem 0;"><span style="background: rgba(245,158,11,0.15); color: var(--warning); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Late Entry</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="glass-card" style="padding: 1.5rem; background: var(--bg-surface);">
                <h3 style="margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 600;">Upcoming Shifts</h3>
                
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    
                    <div style="display: flex; gap: 1rem; align-items: stretch; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-glass); background: rgba(15,23,42,0.3); transition: transform 0.2s; cursor: pointer;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='translateX(0)'">
                        <div style="background: rgba(6,182,212,0.1); padding: 0.5rem; border-radius: 8px; text-align: center; min-width: 54px; display: flex; flex-direction: column; justify-content: center;">
                            <div style="font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; font-weight: bold;">Today</div>
                            <div style="font-weight: bold; color: var(--primary);">2 PM</div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: center;">
                            <h5 style="margin-bottom: 0.2rem; font-size: 0.9rem;">Deep Clean - Office A</h5>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Team Alpha • 4 Staff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    root.innerHTML = renderLayout(content, 'dashboard');
}

function renderStaffRegister() {
    const root = document.getElementById('app-root');
    
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
            <a href="#/staff/new" data-link class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
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
                        <tr style="border-bottom: 1px solid var(--border-glass); color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase;">
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
                    <button class="btn" style="padding: 0.25rem 0.6rem; background: transparent; border: 1px solid var(--border-glass); color: var(--text-muted); border-radius: var(--radius-sm);">Next</button>
                </div>
            </div>
        </div>
    `;

    root.innerHTML = renderLayout(content, 'staff');
}

function renderAddStaff() {
    const root = document.getElementById('app-root');
    
    const content = `
        <div style="margin-bottom: 2rem;">
            <a href="#/staff" data-link style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; text-decoration: none; font-weight: 500;">
                <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> Back to Staff Registry
            </a>
            <h1 style="font-size: 1.8rem; margin-bottom: 0.25rem;">Register New Staff</h1>
            <p style="color: var(--text-muted);">Fill in the details below to onboard a new employee into the system.</p>
        </div>

        <div class="glass-card" style="padding: 2.5rem; background: var(--bg-surface); max-width: 800px;">
            <form id="add-staff-form" class="animate-fade-in">
                
                <div style="margin-bottom: 2.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-glass);">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(6,182,212,0.15); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="user" style="width: 14px; height: 14px; color: var(--primary);"></i>
                        </div>
                        <h3 style="font-size: 1.1rem; color: var(--text-main); font-weight: 600;">Personal Details</h3>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="font-size: 0.8rem;">Full Name</label>
                            <input type="text" class="form-input" style="padding-left: 1rem;" placeholder="e.g. John Doe" required />
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="font-size: 0.8rem;">NIC Number</label>
                            <input type="text" class="form-input" style="padding-left: 1rem;" placeholder="e.g. 19901234567V" required />
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="font-size: 0.8rem;">Contact Number</label>
                            <input type="tel" class="form-input" style="padding-left: 1rem;" placeholder="07XXXXXXXX" required />
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="font-size: 0.8rem;">Date of Joining</label>
                            <input type="date" class="form-input" style="padding-left: 1rem; color-scheme: dark;" required />
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 2.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-glass);">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(59,130,246,0.15); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="briefcase" style="width: 14px; height: 14px; color: var(--secondary);"></i>
                        </div>
                        <h3 style="font-size: 1.1rem; color: var(--text-main); font-weight: 600;">Employment Mapping</h3>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="font-size: 0.8rem;">Designation</label>
                            <select class="form-input" style="padding-left: 1rem; appearance: auto; cursor: pointer;" required>
                                <option value="" disabled selected>Select Role...</option>
                                <option value="Cleaner">Cleaner</option>
                                <option value="Supervisor">Supervisor</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border-glass);">
                    <a href="#/staff" data-link class="btn" style="background: transparent; border: 1px solid var(--border-glass); color: var(--text-main); padding: 0.6rem 1.25rem;">Cancel</a>
                    <button type="submit" class="btn btn-primary" style="padding: 0.6rem 2rem;">
                        <i data-lucide="save" style="width: 18px; height: 18px;"></i> Save Registration
                    </button>
                </div>
            </form>
        </div>
    `;

    root.innerHTML = renderLayout(content, 'staff');

    document.getElementById('add-staff-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        btn.innerHTML = \`<i data-lucide="loader-2" class="animate-spin" style="width: 18px; height: 18px;"></i> Registering...\`;
        if (window.lucide) lucide.createIcons();
        btn.disabled = true;

        setTimeout(() => {
            navigate('#/staff');
        }, 1500);
    });
}

// --- SETUP ROUTER ---
const routes = {
    '': renderLogin,
    '#/': renderLogin,
    '#/dashboard': renderDashboard,
    '#/staff': renderStaffRegister,
    '#/staff/new': renderAddStaff
};

window.addEventListener('hashchange', handleRoute);
document.addEventListener('DOMContentLoaded', handleRoute);

document.body.addEventListener('click', e => {
    const linkElement = e.target.closest('[data-link]');
    if (linkElement) {
        e.preventDefault();
        const href = linkElement.getAttribute('href');
        navigate(href);
    }
});
