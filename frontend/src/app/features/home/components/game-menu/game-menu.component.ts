import { Component, output } from '@angular/core';

/** Tipos de acción del menú — ISP: contrato mínimo y específico. */
export type GameAction = 'create-private' | 'find-ranked';

/**
 * GameMenuComponent — Responsabilidad Única (SRP):
 * presenta las opciones de juego y emite la acción elegida.
 *
 * OCP: nuevas acciones se añaden extendiendo GameAction y el template
 * sin modificar la lógica existente.
 *
 * LSP: el componente cumple su contrato de emitir eventos sin efectos secundarios.
 *
 * ISO 25010 — Usabilidad (operabilidad): botones grandes, con iconos y
 * descripciones claras para facilitar la navegación.
 * ISO 25010 — Accesibilidad: atributos ARIA y roles semánticos.
 */
@Component({
  selector: 'app-game-menu',
  standalone: true,
  template: `
    <nav class="game-menu" aria-label="Menú principal de juego" role="navigation">

      <!-- Botón: Crear Partida Privada -->
      <button
        id="btn-create-private"
        class="menu-btn menu-btn--primary"
        type="button"
        aria-label="Crear una partida privada"
        (click)="onAction('create-private')"
      >
        <span class="menu-btn__icon" aria-hidden="true">🏰</span>
        <span class="menu-btn__content">
          <span class="menu-btn__label">Crear Partida Privada</span>
          <span class="menu-btn__desc">Invita a tus amigos con un código</span>
        </span>
        <span class="menu-btn__arrow" aria-hidden="true">›</span>
      </button>

      <!-- Separador decorativo -->
      <div class="menu-separator" aria-hidden="true">
        <span>✦</span>
      </div>

      <!-- Botón: Buscar Partida Competitiva (Ranked) -->
      <button
        id="btn-find-ranked"
        class="menu-btn menu-btn--ranked"
        type="button"
        aria-label="Buscar partida competitiva en modo ranked"
        (click)="onAction('find-ranked')"
      >
        <span class="menu-btn__icon" aria-hidden="true">⚔️</span>
        <span class="menu-btn__content">
          <span class="menu-btn__label">Buscar Partida Competitiva</span>
          <span class="menu-btn__desc">Enfrenta a rivales de tu nivel (ELO)</span>
        </span>
        <span class="menu-btn__arrow" aria-hidden="true">›</span>
      </button>

    </nav>
  `,
  styleUrl: './game-menu.component.css',
})
export class GameMenuComponent {
  /**
   * Evento de salida tipado — DIP: el componente padre depende de la
   * abstracción (GameAction) no de la implementación de navegación.
   */
  readonly actionSelected = output<GameAction>();

  /** Emite la acción elegida. */
  onAction(action: GameAction): void {
    this.actionSelected.emit(action);
  }
}
