import { renderLayout } from '../components/layout.js';

export function renderDashboard() {
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
            <div class="stat-card">
                <div class="stat-icon orange"><i data-lucide="alert-circle"></i></div>
                <div class="stat-info">
                    <h4>Open Issues</h4>
                    <h2>3</h2>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
            <!-- Main Widget -->
            <div class="glass-card" style="padding: 1.5rem; background: var(--bg-surface);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.1rem; font-weight: 600;">Recent Attendance Updates</h3>
                    <a href="#" style="font-size: 0.8rem;">View All</a>
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
                        <tr>
                            <td style="padding: 1rem 0; display: flex; align-items: center; gap: 0.75rem;">
                                <div class="avatar" style="width: 28px; height: 28px; font-size: 0.7rem; background: var(--secondary);">SM</div>
                                <span style="font-weight: 500;">Sunita Menike</span>
                            </td>
                            <td style="padding: 1rem 0; color: var(--text-muted);">City Mall</td>
                            <td style="padding: 1rem 0; color: var(--text-muted);">06:45 AM</td>
                            <td style="padding: 1rem 0;"><span style="background: rgba(16,185,129,0.15); color: var(--success); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">On Time</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Side Widget -->
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
                    
                    <div style="display: flex; gap: 1rem; align-items: stretch; padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-glass); background: rgba(15,23,42,0.3); transition: transform 0.2s; cursor: pointer;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='translateX(0)'">
                        <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: 8px; text-align: center; min-width: 54px; display: flex; flex-direction: column; justify-content: center;">
                            <div style="font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; font-weight: bold;">Tmrw</div>
                            <div style="font-weight: bold; color: var(--text-main);">6 AM</div>
                        </div>
                        <div style="display: flex; flex-direction: column; justify-content: center;">
                            <h5 style="margin-bottom: 0.2rem; font-size: 0.9rem;">Morning Shift - Mall</h5>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Group 3 • 12 Staff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    root.innerHTML = renderLayout(content, 'dashboard');
}
