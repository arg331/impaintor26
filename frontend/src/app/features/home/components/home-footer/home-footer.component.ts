import { Component } from '@angular/core';

/**
 * HomeFooterComponent — Responsabilidad Única (SRP):
 * muestra la información de pie de página de la pantalla principal.
 *
 * ISO 25010 — Usabilidad (estética e interfaz): pie coherente con
 * la temática del juego, ligero y no intrusivo.
 */
@Component({
  selector: 'app-home-footer',
  standalone: true,
  template: `
    <footer class="home-footer" role="contentinfo">
      <div class="footer-ornament" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" style="width: 0.95rem; height: 0.95rem; display: inline-block; color: #5c3a1e; vertical-align: middle;">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <p class="footer-text">
        Impaintor &copy; 2026 — Dibuja. Engaña. Descubre.
      </p>
      <div class="footer-ornament" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" style="width: 0.95rem; height: 0.95rem; display: inline-block; color: #5c3a1e; vertical-align: middle;">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
    </footer>
  `,
  styleUrl: './home-footer.component.css',
})
export class HomeFooterComponent {}
