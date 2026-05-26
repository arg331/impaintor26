import { Component, EventEmitter, Output, computed, effect, inject, input, signal } from '@angular/core';

import { GameState } from '../../models/game-state';
import { SpectatorCanvasService } from '../../services/spectator-canvas';

/**
 * 2I.4 — Vista de votación.
 *
 * Tarjetas de jugadores vivos con miniatura del dibujo. El jugador puede
 * cambiar su selección libremente hasta que el temporizador llegue a
 * LOCK_SECONDS, momento en el que la selección se envía automáticamente
 * como voto definitivo y las tarjetas se bloquean.
 */
@Component({
  selector: 'app-voting-view',
  standalone: true,
  imports: [],
  templateUrl: './voting-view.html',
  styleUrl: './voting-view.css',
})
export class VotingView {
  private static readonly LOCK_SECONDS = 3;

  readonly state = input.required<GameState>();
  readonly myPlayerId = input<number | null>(null);

  @Output() voteCast = new EventEmitter<number>();

  protected readonly spectator = inject(SpectatorCanvasService);

  /** Tarjeta actualmente seleccionada (cambiable hasta el bloqueo). */
  protected readonly mySelection = signal<number | null>(null);
  /** True después de que el voto se envía automáticamente al servidor. */
  protected readonly voteLocked = signal(false);

  constructor() {
    effect(() => {
      const time = this.state().timeRemainingSec;
      const selection = this.mySelection();
      if (time <= VotingView.LOCK_SECONDS && !this.voteLocked() && selection !== null) {
        this.voteLocked.set(true);
        this.voteCast.emit(selection);
      }
    });
  }

  protected readonly isLocalPlayerEliminated = computed(() => {
    const id = this.myPlayerId();
    return id != null && this.state().eliminatedPlayers.includes(id);
  });

  protected readonly votablePlayers = computed(() => {
    const eliminated = new Set(this.state().eliminatedPlayers);
    return this.state().drawingOrder.filter((id) => !eliminated.has(id));
  });

  protected snapshotFor(playerId: number): string | null {
    return this.spectator.snapshots()[playerId] ?? null;
  }

  protected onVote(playerId: number): void {
    if (this.voteLocked()) return;
    this.mySelection.set(playerId);
  }
}
