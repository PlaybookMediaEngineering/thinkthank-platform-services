import { PlaidAccountTransaction } from "client-typescript-sdk";

interface FinancialMetrics {
  currentAssets: number;
  currentLiabilities: number;
  costOfGoodsSold: number;
  revenue: number;
  expenses: number;
}

class TransactionAnalyzer {
  private transactions: PlaidAccountTransaction[];

  // Category mappings
  private static readonly ASSET_CATEGORIES = [
    "TRANSFER_IN_CASH_ADVANCES_AND_LOANS",
    "TRANSFER_IN_DEPOSIT",
    "TRANSFER_IN_INVESTMENT_AND_RETIREMENT_FUNDS",
    "TRANSFER_IN_SAVINGS",
    "TRANSFER_IN_ACCOUNT_TRANSFER",
    "TRANSFER_IN_OTHER_TRANSFER_IN",
  ];

  private static readonly LIABILITY_CATEGORIES = [
    "LOAN_PAYMENTS_CAR_PAYMENT",
    "LOAN_PAYMENTS_CREDIT_CARD_PAYMENT",
    "LOAN_PAYMENTS_PERSONAL_LOAN_PAYMENT",
    "LOAN_PAYMENTS_MORTGAGE_PAYMENT",
    "LOAN_PAYMENTS_STUDENT_LOAN_PAYMENT",
    "LOAN_PAYMENTS_OTHER_PAYMENT",
  ];

  private static readonly COGS_CATEGORIES = [
    "GENERAL_MERCHANDISE_DISCOUNT_STORES",
    "GENERAL_MERCHANDISE_ONLINE_MARKETPLACES",
    "GENERAL_MERCHANDISE_SUPERSTORES",
  ];

  private static readonly REVENUE_CATEGORIES = [
    "INCOME_DIVIDENDS",
    "INCOME_INTEREST_EARNED",
    "INCOME_RETIREMENT_PENSION",
    "INCOME_TAX_REFUND",
    "INCOME_UNEMPLOYMENT",
    "INCOME_WAGES",
    "INCOME_OTHER_INCOME",
  ];

  private static readonly EXPENSE_CATEGORIES = [
    "BANK_FEES_ATM_FEES",
    "BANK_FEES_FOREIGN_TRANSACTION_FEES",
    "BANK_FEES_INSUFFICIENT_FUNDS",
    "BANK_FEES_INTEREST_CHARGE",
    "BANK_FEES_OVERDRAFT_FEES",
    "BANK_FEES_OTHER_BANK_FEES",
    "FOOD_AND_DRINK_GROCERIES",
    "GENERAL_SERVICES_ACCOUNTING_AND_FINANCIAL_PLANNING",
    "GENERAL_SERVICES_AUTOMOTIVE",
    "GENERAL_SERVICES_CONSULTING_AND_LEGAL",
    "GENERAL_SERVICES_INSURANCE",
    "GENERAL_SERVICES_POSTAGE_AND_SHIPPING",
    "GENERAL_SERVICES_STORAGE",
    "GENERAL_SERVICES_OTHER_GENERAL_SERVICES",
    "RENT_AND_UTILITIES_GAS_AND_ELECTRICITY",
    "RENT_AND_UTILITIES_INTERNET_AND_CABLE",
    "RENT_AND_UTILITIES_RENT",
    "RENT_AND_UTILITIES_SEWAGE_AND_WASTE_MANAGEMENT",
    "RENT_AND_UTILITIES_TELEPHONE",
    "RENT_AND_UTILITIES_WATER",
    "RENT_AND_UTILITIES_OTHER_UTILITIES",
  ];

  constructor(transactions: PlaidAccountTransaction[]) {
    this.transactions = transactions;
  }

  public computeFinancialMetrics(): FinancialMetrics {
    return {
      currentAssets: this.computeCurrentAssets(),
      currentLiabilities: this.computeCurrentLiabilities(),
      costOfGoodsSold: this.computeCostOfGoodsSold(),
      revenue: this.computeRevenue(),
      expenses: this.computeExpenses(),
    };
  }

  private computeCurrentAssets(): number {
    return this.sumTransactions(TransactionAnalyzer.ASSET_CATEGORIES);
  }

  private computeCurrentLiabilities(): number {
    return this.sumTransactions(TransactionAnalyzer.LIABILITY_CATEGORIES);
  }

  private computeCostOfGoodsSold(): number {
    return this.sumTransactions(TransactionAnalyzer.COGS_CATEGORIES);
  }

  private computeRevenue(): number {
    return this.sumTransactions(TransactionAnalyzer.REVENUE_CATEGORIES);
  }

  private computeExpenses(): number {
    return this.sumTransactions(TransactionAnalyzer.EXPENSE_CATEGORIES);
  }

  private sumTransactions(categories: string[]): number {
    return this.transactions
      .filter(
        (t) =>
          t.amount !== undefined &&
          categories.includes(t.personalFinanceCategoryDetailed || ""),
      )
      .reduce((sum, t) => sum + Math.abs(t.amount!), 0);
  }

  public getTransactionsInDateRange(
    startDate: Date,
    endDate: Date,
  ): PlaidAccountTransaction[] {
    return this.transactions.filter((t) => {
      const transactionDate = new Date(t.currentDate!);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }

  public computeMetricChange(
    metric: keyof FinancialMetrics,
    period1Start: Date,
    period1End: Date,
    period2Start: Date,
    period2End: Date,
  ): number {
    const period1Transactions = this.getTransactionsInDateRange(
      period1Start,
      period1End,
    );
    const period2Transactions = this.getTransactionsInDateRange(
      period2Start,
      period2End,
    );

    const period1Analyzer = new TransactionAnalyzer(period1Transactions);
    const period2Analyzer = new TransactionAnalyzer(period2Transactions);

    const period1Metric = period1Analyzer.computeFinancialMetrics()[metric];
    const period2Metric = period2Analyzer.computeFinancialMetrics()[metric];

    return period2Metric - period1Metric;
  }
}

export default TransactionAnalyzer;
