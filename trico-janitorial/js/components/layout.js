export function renderLayout(contentHTML, activeMenu = 'dashboard') {
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
                    
                    <a href="/dashboard" data-link class="nav-item ${activeMenu === 'dashboard' ? 'active' : ''}">
                        <i data-lucide="layout-dashboard" style="width: 20px; height: 20px;"></i>
                        <span>Dashboard</span>
                    </a>
                    <a href="/staff" data-link class="nav-item ${activeMenu === 'staff' ? 'active' : ''}">
                        <i data-lucide="users" style="width: 20px; height: 20px;"></i>
                        <span>Staff Register</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i data-lucide="calendar-check" style="width: 20px; height: 20px;"></i>
                        <span>Attendance</span>
                    </a>
                    
                    <p style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; padding: 0 1rem; margin-top: 1.5rem; margin-bottom: 0.25rem;">Finance</p>
                    
                    <a href="#" class="nav-item">
                        <i data-lucide="calculator" style="width: 20px; height: 20px;"></i>
                        <span>Payroll</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i data-lucide="file-text" style="width: 20px; height: 20px;"></i>
                        <span>Invoices</span>
                    </a>
                    
                    <p style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; padding: 0 1rem; margin-top: 1.5rem; margin-bottom: 0.25rem;">Operations</p>
                    
                    <a href="#" class="nav-item">
                        <i data-lucide="box" style="width: 20px; height: 20px;"></i>
                        <span>Inventory</span>
                    </a>
                </nav>
                
                <div class="sidebar-footer" style="padding-top: 1rem; border-top: 1px solid var(--border-glass);">
                    <a href="/" data-link class="nav-item text-danger">
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
                        <button class="icon-btn" title="Notifications">
                            <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
                            <span class="badge">3</span>
                        </button>
                        
                        <div style="width: 1px; height: 24px; background: var(--border-glass); margin: 0 0.5rem;"></div>
                        
                        <div class="user-profile">
                            <div class="avatar" style="border: 2px solid var(--primary);">AU</div>
                            <div class="user-info">
                                <span class="user-name">Admin User</span>
                                <span class="user-role" style="color: var(--primary);">Administrator</span>
                            </div>
                            <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: var(--text-muted); margin-left: 0.25rem;"></i>
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
