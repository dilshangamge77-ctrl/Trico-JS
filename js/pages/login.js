import { navigate } from '../app.js';

export function renderLogin() {
    const root = document.getElementById('app-root');
    
    root.innerHTML = `
        <div class="auth-container">
            <!-- Animated Background Abstract Shapes -->
            <div class="bg-shape bg-shape-1"></div>
            <div class="bg-shape bg-shape-2"></div>

            <!-- Login Context Container -->
            <div class="glass-card animate-slide-up" style="width: 100%; max-width: 420px;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <!-- App Logo/Icon -->
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
                            <a href="#" style="font-size: 0.8rem; margin-bottom: 0.5rem;">Forgot Password?</a>
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

                <!-- Footer Text -->
                <div style="text-align: center; margin-top: 2rem; border-top: 1px solid var(--border-glass); padding-top: 1.5rem;">
                    <p style="font-size: 0.8rem; color: var(--text-muted);">
                        &copy; 2026 Trico Services. Secure Gateway.
                    </p>
                </div>
            </div>
        </div>
    `;

    // Handle form submission with mock authentication delay
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = e.target.querySelector('button');
        
        // Show loading state
        btn.innerHTML = `
            <i data-lucide="loader-2" class="animate-spin" style="width: 20px; height: 20px;"></i> 
            <span>Authenticating...</span>
        `;
        
        // Ensure the new icon is rendered
        if (window.lucide) lucide.createIcons();
        btn.style.opacity = '0.9';
        btn.disabled = true;
        
        // Simulate network request
        setTimeout(() => {
            navigate('/dashboard');
        }, 1200);
    });
}
