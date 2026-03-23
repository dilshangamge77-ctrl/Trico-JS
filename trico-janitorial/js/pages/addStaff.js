import { renderLayout } from '../components/layout.js';
import { navigate } from '../app.js';

export function renderAddStaff() {
    const root = document.getElementById('app-root');
    
    const content = `
        <div style="margin-bottom: 2rem;">
            <a href="/staff" data-link style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; text-decoration: none; font-weight: 500;">
                <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> Back to Staff Registry
            </a>
            <h1 style="font-size: 1.8rem; margin-bottom: 0.25rem;">Register New Staff</h1>
            <p style="color: var(--text-muted);">Fill in the details below to onboard a new employee into the system.</p>
        </div>

        <div class="glass-card" style="padding: 2.5rem; background: var(--bg-surface); max-width: 800px;">
            <form id="add-staff-form" class="animate-fade-in">
                
                <!-- Section 1: Personal Details -->
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

                    <div class="form-group" style="margin-bottom: 0;">
                        <label class="form-label" style="font-size: 0.8rem;">Residential Address</label>
                        <textarea class="form-input" style="padding-left: 1rem; min-height: 80px; resize: vertical;" placeholder="Enter full address..." required></textarea>
                    </div>
                </div>

                <!-- Section 2: Employment Details -->
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
                                <option value="Specialist">Specialist Cleaner</option>
                                <option value="Utility">Utility Staff</option>
                            </select>
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="font-size: 0.8rem;">Assign Site</label>
                            <select class="form-input" style="padding-left: 1rem; appearance: auto; cursor: pointer;" required>
                                <option value="" disabled selected>Select Location...</option>
                                <option value="Office Block A">Office Block A</option>
                                <option value="Apartment Complex B">Apartment Complex B</option>
                                <option value="City Mall">City Mall</option>
                                <option value="Tech Park Z">Tech Park Z</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Section 3: Document Uploads -->
                <div style="margin-bottom: 2.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-glass);">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(16,185,129,0.15); display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="file-check" style="width: 14px; height: 14px; color: var(--success);"></i>
                        </div>
                        <h3 style="font-size: 1.1rem; color: var(--text-main); font-weight: 600;">Verification Documents</h3>
                    </div>

                    <div class="form-group" style="margin-bottom: 0;">
                        <label class="form-label" style="font-size: 0.8rem; margin-bottom: 0.75rem;">Upload NIC or Police Clearance (Optional)</label>
                        <div style="border: 2px dashed var(--border-glass); border-radius: var(--radius-md); padding: 3rem 2rem; text-align: center; background: rgba(15,23,42,0.4); transition: all var(--transition-fast); cursor: pointer;" 
                             onmouseover="this.style.borderColor='var(--primary)'; this.style.background='rgba(15,23,42,0.7)';" 
                             onmouseout="this.style.borderColor='var(--border-glass)'; this.style.background='rgba(15,23,42,0.4)';">
                            <i data-lucide="cloud-upload" style="width: 40px; height: 40px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                            <p style="color: var(--text-main); font-weight: 500; font-size: 1.05rem; margin-bottom: 0.25rem;">Click to browse files or drag here</p>
                            <p style="color: var(--text-muted); font-size: 0.85rem;">Supports PDF, JPG, and PNG (Max 5MB)</p>
                        </div>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border-glass);">
                    <a href="/staff" data-link class="btn" style="background: transparent; border: 1px solid var(--border-glass); color: var(--text-main); padding: 0.6rem 1.25rem;">Cancel</a>
                    <button type="submit" class="btn btn-primary" style="padding: 0.6rem 2rem;">
                        <i data-lucide="save" style="width: 18px; height: 18px;"></i> Save Registration
                    </button>
                </div>
            </form>
        </div>
    `;

    root.innerHTML = renderLayout(content, 'staff');

    // Simulate saving and transition
    document.getElementById('add-staff-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const origWidth = btn.offsetWidth;
        
        btn.style.width = origWidth + 'px';
        btn.innerHTML = `<i data-lucide="loader-2" class="animate-spin" style="width: 18px; height: 18px;"></i> Registering...`;
        if (window.lucide) lucide.createIcons();
        btn.disabled = true;

        setTimeout(() => {
            // Optional: Show a fancy toast notification before navigating
            btn.innerHTML = `<i data-lucide="check" style="width: 18px; height: 18px;"></i> Success!`;
            btn.className = "btn";
            btn.style.background = "var(--success)";
            btn.style.borderColor = "var(--success)";
            btn.style.color = "white";
            if (window.lucide) lucide.createIcons();
            
            setTimeout(() => {
                navigate('/staff');
            }, 800);
        }, 1500);
    });
}
