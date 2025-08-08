import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog de Tecnología';
  
  // Modal properties
  showLoginModal = false;
  showPassword = false;

  // Watch for modal state changes
  get modalOpen() {
    return this.showLoginModal;
  }

  // Toggle password visibility
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Close modal when clicking outside
  closeModal(event: Event) {
    if (event.target === event.currentTarget) {
      this.showLoginModal = false;
    }
  }

  // Close modal with Escape key
  @HostListener('document:keydown.escape')
  onEscapePress() {
    if (this.showLoginModal) {
      this.showLoginModal = false;
    }
  }
}
