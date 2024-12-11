import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input();
  @Input() results?: {
    year: Number;
    interest: Number;
    valueEndOfYear: Number;
    annualInvestment: Number;
    totalInterest: Number;
    totalAmountInvested: Number;
  }[];
}
