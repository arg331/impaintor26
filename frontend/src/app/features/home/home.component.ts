import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { GameMenuComponent, GameAction } from './components/game-menu/game-menu.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

/**
 * HomeComponent — Pantalla principal (menú home) de Impaintor.
 *
 * SRP: únicamente orquesta los sub-componentes y delega la
 * navegación al Router de Angular.
 *
 * OCP: nuevos sub-componentes se añaden sin modificar la lógica
 * de navegación existente.
 *
 * DIP: depende de la abstracción Router, no de implementaciones concretas.
 *
 * ISO 25010 — Funcionalidad (completitud): expone las dos acciones
 * principales requeridas (partida privada y ranked).
 * ISO 25010 — Usabilidad: estructura clara, jerarquía visual coherente.
 * ISO 25010 — Portabilidad: diseño responsive para distintos dispositivos.
 * ISO 25010 — Mantenibilidad: componente raíz delgado y cohesivo.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeBannerComponent, GameMenuComponent, HomeFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly router = inject(Router);

  /**
   * Maneja la acción elegida en el GameMenuComponent.
   * Navega a la ruta correspondiente según la acción recibida.
   *
   * @param action - Acción emitida por el menú ('create-private' | 'find-ranked')
   */
  onGameAction(action: GameAction): void {
    const routes: Record<GameAction, string> = {
      'create-private': '/room/create',
      'find-ranked': '/matchmaking',
    };
    this.router.navigate([routes[action]]);
  }
}
