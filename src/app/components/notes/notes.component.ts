import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { QuillLoaderService } from '../../services/quill-loader.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, EditorModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  public readonly editorContents: string[] = [
    'Discover the ultimate luxury boat charter along the Adriatic coast, complete with personalized skipper service and gourmet catering.',
    'Set sail from Marina Porto Montenegro and explore hidden coves, vibrant seaside towns, and crystal‑clear waters with our bespoke charter packages.',
    'Our fleet of modern yachts is ready to take you on an unforgettable journey, whether it’s a day trip to the Blue Cave or a sunset cruise.',
    'Experience island hopping in style: visit Hvar, Brac, and Korcula, with all fuel, docking fees, and water sports equipment included.',
    'Book now for early‑season savings and enjoy exclusive amenities like onboard Wi‑Fi, paddleboards, and a professional photographer.',
  ];
  constructor(private quillLoader: QuillLoaderService) {}

  ngOnInit(): void {
    this.quillLoader.loadQuillCSS();
  }
}
