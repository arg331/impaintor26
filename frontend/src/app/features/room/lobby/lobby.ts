import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lobby.html',
  styleUrl: './lobby.css',
})
export class Lobby {
  private readonly route = inject(ActivatedRoute);
  
  roomCode = this.route.snapshot.paramMap.get('code') || 'UNKNOWN';
}
