// parser.js
import { Parser } from './parser';

class AnalyticsParser {
  constructor() {
    this.data = [];
    this.columns = ['date', 'event', 'duration', 'category', 'subcategory', 'source', 'medium', 'device', 'browser', 'os', 'screenResolution', 'clickCount'];
  }

  init(data) {
    this.data = data;
  }

  parse() {
    const parsedData = this.data.map((row) => {
      const parsedRow = {};
      this.columns.forEach((column, index) => {
        if (column in row) {
          parsedRow[column] = row[column];
        }
      });
      return parsedRow;
    });
    return parsedRow;
  }

  groupByCategory() {
    const categoryGroups = {};
    this.data.forEach((row) => {
      const category = row.category;
      if (!categoryGroups[category]) {
        categoryGroups[category] = [];
      }
      categoryGroups[category].push(row);
    });
    return categoryGroups;
  }

  getDurationDistribution() {
    const durationGroups = {};
    this.data.forEach((row) => {
      const duration = row.duration;
      if (!durationGroups[duration]) {
        durationGroups[duration] = 0;
      }
      durationGroups[duration]++;
    });
    return durationGroups;
  }
}

export { AnalyticsParser };