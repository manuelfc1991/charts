# EraCRM Chart Plugin Documentation

## Table of Contents
1. [Overview](#overview)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Configuration Options](#configuration-options)
5. [Chart Types](#chart-types)
6. [Data Processing](#data-processing)
7. [Event Handlers](#event-handlers)
8. [Methods](#methods)
9. [Examples](#examples)
10. [Advanced Features](#advanced-features)

## Overview

EraCRM Chart is a flexible jQuery plugin for creating interactive charts and data visualizations with built-in filtering, modal views, and export capabilities. It supports multiple chart types including bar charts, line charts, and funnel charts.

## Installation

### Prerequisites
- jQuery 1.7+
- Chart.js (for non-funnel charts)
- Bootstrap Icons (for UI elements)

### Basic Setup
```html
<!-- Include dependencies -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

<!-- Include EraCRM Chart plugin -->
<script src="era-crm-chart.js"></script>
```

## Basic Usage

### Minimal Example
```javascript
$('#chart-container').eraCrmChart({
    dataType: 'leads',
    data: chartData,
    title: 'Monthly Leads Overview'
});
```

### Complete Example
```javascript
$('#chart-container').eraCrmChart({
    dataType: 'leads',
    data: chartData,
    title: 'Sales Performance 2024',
    groupBy: 'month',
    chartType: 'bar',
    enableYearFilter: true,
    enableTimeframeFilter: true,
    enableOwnerFilter: true,
    height: '400px',
    
    // Event handlers
    onChartClick: function(label, data) {
        console.log('Chart clicked:', label, data);
    },
    
    onRowClick: function(item) {
        console.log('Row clicked:', item);
    }
});
```

## Configuration Options

### Core Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `dataType` | string | `'leads'` | Type of data being visualized |
| `data` | object | `null` | The chart data object |
| `title` | string | `'Monthly Data 2025'` | Chart title displayed in header |
| `groupBy` | string | `'month'` | How to group data (see Group By options) |
| `chartType` | string | `'bar'` | Chart type: `'bar'`, `'line'`, `'funnel'` |
| `chartColor` | string | `'#5b9bfa'` | Default chart color |
| `chartColors` | array/function | `null` | Custom colors for bars |

### Filter Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableYearFilter` | boolean | `true` | Show year filter dropdown |
| `yearFilter` | number | current year | Initial year filter value |
| `yearFilterMode` | string | `'equal'` | Year filter mode: `'equal'`, `'greater'`, `'less'` |
| `enableTimeframeFilter` | boolean | `true` | Show timeframe filter dropdown |
| `timeframeFilter` | string | `'year'` | Timeframe: `'year'`, `'month'`, `'last3months'`, `'last6months'`, `'thismonth'`, `'lastmonth'`, `'thisquarter'`, `'lastquarter'`, `'custom'` |
| `enableOwnerFilter` | boolean | `false` | Show owner filter dropdown |
| `selectedOwner` | string | `null` | Initially selected owner ID |

### Display Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `height` | string | `'400px'` | Chart container height |
| `minHeight` | string | `'300px'` | Minimum chart height |
| `modalHeight` | string | `'450px'` | Modal chart height |
| `useMonthKeys` | boolean | `false` | Use month keys in data structure |

### Data Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `statusOrder` | array | `['New Lead', 'Working - Contacted', 'Contacted - Interested', 'Closed - Committed']` | Order of status values |
| `columns` | array | predefined | Table column configuration |
| `badges` | object | predefined | Status badge styling configuration |
| `dataProcessor` | function | `null` | Custom data processing function |

## Chart Types

### Group By Options

The `groupBy` option determines how data is aggregated and displayed:

#### 1. `'month'` - Monthly Data
Groups data by month of creation date.
```javascript
groupBy: 'month'
```

#### 2. `'owner'` - By Owner
Groups data by owner/assignee.
```javascript
groupBy: 'owner'
```

#### 3. `'status'` - By Status
Groups data by lead/opportunity status.
```javascript
groupBy: 'status'
```

#### 4. `'funnel'` - Funnel Chart
Creates a sales funnel visualization with conversion rates.
```javascript
groupBy: 'funnel'
```

#### 5. `'owner-funnel'` - Owner Funnel
Shows funnel data grouped by owner (stacked bar chart).
```javascript
groupBy: 'owner-funnel'
```

#### 6. `'owner-month'` - Owner Monthly
Shows monthly data for a specific owner.
```javascript
groupBy: 'owner-month',
enableOwnerFilter: true
```

#### 7. `'owner-funnel-view'` - Owner Funnel View
Shows funnel data for a specific owner.
```javascript
groupBy: 'owner-funnel-view',
enableOwnerFilter: true
```

#### 8. `'status-month'` - Status Monthly
Shows monthly status data for a specific owner.
```javascript
groupBy: 'status-month',
enableOwnerFilter: true
```

### Timeframe Filter Options

| Value | Description |
|-------|-------------|
| `'year'` | Current calendar year |
| `'month'` | Current month |
| `'thismonth'` | Alias for current month |
| `'lastmonth'` | Previous month |
| `'last3months'` | Last 3 months including current |
| `'last6months'` | Last 6 months including current |
| `'thisquarter'` | Current quarter |
| `'lastquarter'` | Previous quarter |
| `'custom'` | Custom date range (prompts for dates) |

## Data Processing

### Data Structure

The plugin expects data in a specific format:

```javascript
const chartData = {
    msg: {
        ownerOrder: ['user1', 'user2', 'user3'],
        ownerList: {
            'user1': 'John Doe',
            'user2': 'Jane Smith',
            'user3': 'Bob Johnson'
        },
        colorList: {
            'user1': '#ff0000',
            'user2': '#00ff00',
            'user3': '#0000ff'
        },
        leads: {
            'user1': [
                {
                    Name: 'Lead 1',
                    Owner: 'user1',
                    Email: 'lead1@example.com',
                    Phone: '123-456-7890',
                    LeadStatus: 'New Lead',
                    JourneyStage: 'Prospect',
                    LeadSource: 'Website',
                    Designation: 'Manager',
                    CreatedDate: '2024-01-15'
                },
                // ... more leads
            ],
            'user2': [
                // ... user2's leads
            ]
        },
        // For useMonthKeys: true
        opportunities: {
            '2024-01': {
                count: 15,
                color: '#5b9bfa',
                opportunities: [
                    // opportunity objects
                ]
            }
        }
    }
};
```

### Custom Data Processor

You can provide a custom data processing function:

```javascript
$('#chart').eraCrmChart({
    dataProcessor: function(data, options) {
        // Custom processing logic
        return {
            labels: ['Custom 1', 'Custom 2', 'Custom 3'],
            counts: [10, 20, 15],
            colors: ['#ff0000', '#00ff00', '#0000ff'],
            dataMap: {
                'Custom 1': { name: 'Custom 1', items: [...] },
                'Custom 2': { name: 'Custom 2', items: [...] },
                'Custom 3': { name: 'Custom 3', items: [...] }
            }
        };
    }
});
```

### Custom Colors

You can customize chart colors in several ways:

#### Array of Colors
```javascript
chartColors: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
```

#### Function-based Colors
```javascript
chartColors: function(label, index, count) {
    if (count > 20) return '#ff0000';
    if (count > 10) return '#ff9900';
    return '#5b9bfa';
}
```

## Event Handlers

### Available Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `onChartClick` | `label, data` | Fired when chart bar/segment is clicked |
| `onRowClick` | `item` | Fired when table row is clicked |
| `onRefresh` | none | Fired when refresh button is clicked |
| `onExport` | `chartData` | Fired when export button is clicked |
| `onYearFilterChange` | `year, mode` | Fired when year filter changes |
| `onOwnerFilterChange` | `ownerId` | Fired when owner filter changes |
| `onTimeframeFilterChange` | `timeframe` | Fired when timeframe filter changes |

### Event Handler Examples

```javascript
$('#chart').eraCrmChart({
    onChartClick: function(label, data) {
        console.log('Chart element clicked:', label);
        console.log('Data for this segment:', data);
    },
    
    onRowClick: function(item) {
        // Open detailed view for this item
        openLeadDetails(item.Id);
    },
    
    onRefresh: function() {
        // Reload data from server
        loadChartData();
    },
    
    onExport: function(chartData) {
        // Custom export logic
        exportToExcel(chartData);
    },
    
    onYearFilterChange: function(year, mode) {
        console.log(`Year filter changed to: ${mode} ${year}`);
    },
    
    onOwnerFilterChange: function(ownerId) {
        console.log('Owner filter changed to:', ownerId);
    },
    
    onTimeframeFilterChange: function(timeframe) {
        console.log('Timeframe changed to:', timeframe);
    }
});
```

## Methods

### Public Methods

#### `refresh(newData)`
Refresh the chart with new data.

```javascript
const chart = $('#chart-container').data('eraCrmChart');
chart.refresh(updatedData);
```

#### `updateOptions(newOptions)`
Update chart options and refresh.

```javascript
chart.updateOptions({
    groupBy: 'status',
    chartType: 'line'
});
```

#### `destroy()`
Destroy the chart instance and clean up.

```javascript
chart.destroy();
```

### Method Chaining Example

```javascript
$('#chart-container')
    .eraCrmChart({ dataType: 'leads', data: initialData })
    .data('eraCrmChart')
    .updateOptions({ groupBy: 'funnel' });
```

## Examples

### Basic Bar Chart
```javascript
$('#leads-chart').eraCrmChart({
    dataType: 'leads',
    data: leadsData,
    title: 'Monthly Leads',
    groupBy: 'month',
    chartType: 'bar',
    height: '300px'
});
```

### Funnel Chart with Custom Status Order
```javascript
$('#funnel-chart').eraCrmChart({
    dataType: 'opportunities',
    data: opportunitiesData,
    title: 'Sales Funnel',
    groupBy: 'funnel',
    statusOrder: [
        'Prospect',
        'Qualified',
        'Meeting Scheduled',
        'Proposal Sent',
        'Closed Won'
    ],
    badges: {
        'Prospect': { class: 'status-new', color: '#fff3cd' },
        'Qualified': { class: 'status-working', color: '#f8d7da' },
        'Meeting Scheduled': { class: 'status-contacted', color: '#d1ecf1' },
        'Proposal Sent': { class: 'status-committed', color: '#d4edda' },
        'Closed Won': { class: 'status-success', color: '#d4edda' }
    }
});
```

### Owner-specific Chart with Filters
```javascript
$('#owner-chart').eraCrmChart({
    dataType: 'leads',
    data: leadsData,
    title: 'Team Performance',
    groupBy: 'owner-month',
    enableOwnerFilter: true,
    enableTimeframeFilter: true,
    timeframeFilter: 'last3months',
    selectedOwner: 'user123',
    onOwnerFilterChange: function(ownerId) {
        updateDashboardForOwner(ownerId);
    }
});
```

### Custom Styled Chart
```javascript
$('#custom-chart').eraCrmChart({
    dataType: 'leads',
    data: leadsData,
    title: 'Custom Styled Chart',
    groupBy: 'status',
    chartColors: [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'
    ],
    height: '500px',
    modalHeight: '600px'
});
```

## Advanced Features

### Custom Table Columns

You can customize the columns displayed in the modal table:

```javascript
columns: [
    { 
        key: 'Name', 
        label: 'Contact Name', 
        render: function(value, item) {
            return `<strong>${value}</strong>`;
        }
    },
    { 
        key: 'Email', 
        label: 'Email Address' 
    },
    { 
        key: 'LeadStatus', 
        label: 'Current Status', 
        render: 'badge' 
    },
    { 
        key: 'Amount', 
        label: 'Deal Size',
        render: function(value, item) {
            return `$${parseInt(value).toLocaleString()}`;
        }
    },
    { 
        key: 'CustomField', 
        label: 'Custom Field',
        render: function(value, item) {
            // Custom rendering logic
            return value ? 'Yes' : 'No';
        }
    }
]
```

### Custom Badge Styling

Define custom styles for status badges:

```javascript
badges: {
    'New Lead': { 
        class: 'status-new', 
        color: '#fff3cd' 
    },
    'Working - Contacted': { 
        class: 'status-working', 
        color: '#f8d7da' 
    },
    'Contacted - Interested': { 
        class: 'status-contacted', 
        color: '#d1ecf1' 
    },
    'Closed - Committed': { 
        class: 'status-committed', 
        color: '#d4edda' 
    },
    'Custom Status': {
        class: 'custom-status',
        color: '#your-color'
    }
}
```

### Custom CSS Styling

The plugin generates the following CSS classes for customization:

```css
/* Container and Layout */
.era-crm-bar-chart-container
.era-crm-bar-chart-header
.era-crm-bar-chart-header-right

/* Filters */
.era-crm-year-filter
.era-crm-year-select
.era-crm-timeframe-select

/* Charts */
.era-crm-bar-chart-chart-container
.era-funnel-container
.era-funnel-chart
.era-funnel-stage
.era-funnel-bar

/* Modal */
.era-crm-bar-chart-modal
.era-crm-bar-chart-modal-content
.era-crm-bar-chart-table

/* Status Badges */
.era-crm-bar-chart-status-badge
.status-new
.status-working
.status-contacted
.status-committed
```

### Integration with External Data Sources

```javascript
// Example: Loading data from API
function loadChartData() {
    $.ajax({
        url: '/api/leads/chart-data',
        method: 'GET',
        success: function(data) {
            $('#chart-container').eraCrmChart({
                dataType: 'leads',
                data: data,
                title: 'Real-time Leads Dashboard',
                groupBy: 'month',
                enableTimeframeFilter: true,
                onRefresh: loadChartData
            });
        }
    });
}

// Initialize
loadChartData();
```

### Error Handling

```javascript
try {
    $('#chart').eraCrmChart({
        dataType: 'leads',
        data: potentiallyInvalidData,
        onChartClick: function(label, data) {
            if (!data || !data.items) {
                console.error('Invalid data for label:', label);
                return;
            }
            // Process data
        }
    });
} catch (error) {
    console.error('Failed to initialize chart:', error);
    showErrorMessage('Chart initialization failed');
}
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Tips

1. **Use appropriate data structure** - Ensure your data matches the expected format
2. **Limit data points** - For better performance, avoid extremely large datasets
3. **Use custom data processors** for complex data transformations
4. **Destroy instances** when not in use to free memory
5. **Use `useMonthKeys: true`** for optimized monthly data handling

## Troubleshooting

### Common Issues

1. **Chart not rendering**
   - Check browser console for errors
   - Verify Chart.js is loaded
   - Ensure data structure is correct

2. **Filters not working**
   - Verify `enableYearFilter`, `enableTimeframeFilter`, or `enableOwnerFilter` are set to true
   - Check that data contains the necessary fields (CreatedDate, Owner, etc.)

3. **Modal not showing details**
   - Verify `columns` configuration matches your data structure
   - Check that `dataMap` is properly populated in processed data

4. **Funnel chart conversion rates incorrect**
   - Ensure `statusOrder` is correctly configured
   - Verify status values in data match those in `statusOrder`

### Debug Mode

For debugging, you can access the chart instance:

```javascript
const chartInstance = $('#chart-container').data('eraCrmChart');
console.log('Chart data:', chartInstance.chartData);
console.log('Options:', chartInstance.options);
```

This documentation covers all the features and capabilities of the EraCRM Chart plugin. For additional help or specific use cases, refer to the examples provided or examine the source code comments.
