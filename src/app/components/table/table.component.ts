import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

interface Boat {
  name: string;
  type: string;
  length: number;
  year: number;
  description: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, TooltipModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  public readonly boats: Boat[] = [
    {
      name: 'Sea Whisperer',
      type: 'Sailboat',
      length: 35,
      year: 2010,
      description:
        'A classic sailboat known for its smooth navigation and sturdy build, perfect for long-distance coastal journeys and weekend getaways with family and friends.',
    },
    {
      name: 'Wave Chaser',
      type: 'Speedboat',
      length: 28,
      year: 2018,
      description: 'High-performance speedboat.',
    },
    {
      name: 'Ocean Breeze',
      type: 'Catamaran',
      length: 42,
      year: 2022,
      description:
        'A spacious and stable catamaran designed for comfort and extended trips. Offers dual hulls, a roomy deck area, and fully equipped living quarters, ideal for modern sailing adventures.',
    },
    {
      name: 'Sun Dancer',
      type: 'Yacht',
      length: 55,
      year: 2015,
      description: 'An elegant yacht.',
    },
    {
      name: 'Reef Explorer',
      type: 'Dinghy',
      length: 12,
      year: 2020,
      description:
        'A small, versatile dinghy perfect for quick coastal trips, diving excursions, or serving as a tender to larger vessels. Lightweight and easy to handle.',
    },
    {
      name: 'Blue Horizon',
      type: 'Motor Yacht',
      length: 65,
      year: 2017,
      description: 'A high-end motor yacht.',
    },
    {
      name: 'Lagoon Spirit',
      type: 'Catamaran',
      length: 50,
      year: 2021,
      description:
        'Sleek and fast, this speedboat is designed for adrenaline-pumping rides across open water. Features advanced navigation tech and ergonomic seating.',
    },
    {
      name: 'Thunderbolt',
      type: 'Speedboat',
      length: 30,
      year: 2019,
      description: 'Sleek and fast.',
    },
    {
      name: 'Coral Dream',
      type: 'Sailboat',
      length: 40,
      year: 2012,
      description:
        'Built for smooth sailing and classic beauty, this vessel boasts a teak deck, large sails, and a cozy interior cabin for weekend adventures.',
    },
    {
      name: 'Island Hopper',
      type: 'Fishing Boat',
      length: 33,
      year: 2016,
      description: 'A  fishing boat.',
    },
  ];

  hoveredTooltipIndex: number | null = null;

  onMouseEnter(el: HTMLElement, index: number) {
    const isTruncated =
      el.offsetHeight < el.scrollHeight || el.offsetWidth < el.scrollWidth;

    this.hoveredTooltipIndex = isTruncated ? index : null;
  }

  onMouseLeave(index: number) {
    if (this.hoveredTooltipIndex === index) {
      this.hoveredTooltipIndex = null;
    }
  }
}
