const eraChartStyles = `
.era-crm-bar-chart-container {
    /*background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 30px;*/
}

.era-crm-bar-chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.era-crm-bar-chart-header h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #333;
}

.era-crm-bar-chart-header-right {
    display: flex;
    gap: 10px;
    align-items: center;
}

.era-crm-year-filter {
    display: flex;
    gap: 8px;
    align-items: center;
}

.era-crm-year-select {
    padding: 6px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
}

/* Funnel Chart Styles */
.era-funnel-container {
    position: relative;
    padding: 30px 20px 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.era-funnel-chart {
    position: relative;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.era-funnel-stage {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}

.era-funnel-stage:hover {
    transform: translateY(-2px);
}

.era-funnel-bar {
    position: relative;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.era-funnel-bar.final-stage {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.era-funnel-bar.regular-stage {
    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.era-funnel-label {
    position: absolute;
    /* bottom: -25px; */
    left: 0;
    font-size: 13px;
    color: #666;
    white-space: nowrap;
    font-weight: 500;
}

.era-funnel-count {
    position: absolute;
    top: 25px;
    left: 11px;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    z-index: 1;
}

.era-funnel-conversion {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.era-funnel-connector {
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    text-align: center;
}

.era-funnel-arrow {
    font-size: 24px;
    color: #cbd5e1;
}

.era-funnel-conversion-rate {
    position: absolute;
    top: 50%;
    right: -70px;
    transform: translate(-10px, -50%);
    background: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    color: #666;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    white-space: nowrap;
}

.era-funnel-total-conversion {
    position: absolute;
    right: 20px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-50%);
}

.era-funnel-total-percentage {
    font-size: 32px;
    font-weight: 700;
    color: #10b981;
    line-height: 1;
}

.era-funnel-total-label {
    font-size: 12px;
    color: #666;
    text-align: center;
    margin-top: 4px;
    max-width: 120px;
}

.era-crm-bar-chart-refresh-icon {
    cursor: pointer;
    font-size: 18px;
    color: #666;
    transition: transform 0.3s;
}

.era-crm-bar-chart-refresh-icon:hover {
    color: #333;
}

.era-crm-bar-chart-fullscreen-btn {
    background: #5b9bfa;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.era-crm-bar-chart-fullscreen-btn:hover {
    background: #4a8ae8;
}

.era-crm-bar-chart-chart-container {
    position: relative;
}

/* Modal Styles */
.era-crm-bar-chart-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.era-crm-bar-chart-modal-content {
    background: white;
    width: 90%;
    max-width: 1200px;
    max-height: 90vh;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

.era-crm-bar-chart-modal-header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.era-modal-title {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
}

.era-crm-bar-chart-close {
    cursor: pointer;
    font-size: 24px;
    color: #666;
}

.era-crm-bar-chart-close:hover {
    color: #333;
}

.era-crm-bar-chart-modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
    margin-bottom: 7px;
}

.era-crm-bar-chart-toolbar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.era-crm-bar-chart-search-box {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
}

.era-crm-bar-chart-toolbar-btn,
.era-crm-bar-chart-export-btn {
    padding: 10px 16px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.era-crm-bar-chart-toolbar-btn:hover,
.era-crm-bar-chart-export-btn:hover {
    background: #f8f9fa;
}

.era-crm-bar-chart-modal-chart-container {
    position: relative;
    margin-bottom: 20px;
}

.era-crm-bar-chart-breadcrumb {
    padding: 10px 0;
    color: #666;
    font-size: 14px;
}

.era-crm-bar-chart-group-header {
    font-weight: 600;
    padding: 10px 0;
    font-size: 16px;
    color: #333;
}

.era-crm-bar-chart-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.era-crm-bar-chart-table th {
    background: #f8f9fa;
    padding: 12px;
    text-align: left;
    font-weight: 600;
    border-bottom: 2px solid #ddd;
}

.era-crm-bar-chart-table td {
    padding: 12px;
    border-bottom: 1px solid #eee;
}

.era-crm-bar-chart-table tr:hover {
    background: #f8f9fa;
}

.era-crm-bar-chart-status-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.status-new {
    background: #fff3cd;
    color: #856404;
}

.status-working {
    background: #f8d7da;
    color: #721c24;
}

.status-contacted {
    background: #d1ecf1;
    color: #0c5460;
}

.status-committed {
    background: #d4edda;
    color: #155724;
}
`;

$("<style>").text(eraChartStyles).appendTo("body");

(function($) {
    'use strict';

    const defaultOptions = {
        dataType: 'leads',
        data: null,
        title: 'Monthly Data 2025',
        groupBy: 'month', // 'month', 'owner', 'status', 'funnel', 'owner-funnel', 'owner-month', 'owner-funnel-view'
        chartColor: '#5b9bfa',
        chartColors: null, // Array of colors for each bar or function(label, index, count) => color
        chartType: 'bar', // 'bar', 'line', 'funnel'
        yearFilter: new Date().getFullYear(),
        yearFilterMode: 'equal', // 'equal', 'greater', 'less'
        enableYearFilter: true,
        enableSearch: true,
        enableExport: false,
        enableOwnerFilter: false, // Enable owner filter dropdown
        selectedOwner: null, // Selected owner ID for filtering
        height: '400px',
        minHeight: '300px',
        modalHeight: '450px',
        useMonthKeys: false,
        
        // Status order configuration - NEW IMPROVED OPTION
        statusOrder: ['New Lead', 'Working - Contacted', 'Contacted - Interested', 'Closed - Committed'],
        // Funnel-specific options
        funnelGroupBy: 'all', // 'all', 'owner', 'status'
        funnelTimeframe: 'year', // 'year', 'month', 'last3months', 'last6months', 'custom'
        // funnelStatusOrder: ['New Lead', 'Working - Contacted', 'Contacted - Interested', 'Closed - Committed'], outdated
        
        columns: [
            { key: 'Name', label: 'Name', render: null },
            { key: 'Owner', label: 'Owner', render: null },
            { key: 'Email', label: 'Email', render: null },
            { key: 'Phone', label: 'Phone', render: null },
            { key: 'LeadStatus', label: 'Status', render: 'badge' },
            { key: 'JourneyStage', label: 'Journey Stage', render: 'badge' },
            { key: 'LeadSource', label: 'Source', render: null },
            { key: 'Designation', label: 'Designation', render: null }
        ],
        
        badges: {
            'New Lead': { class: 'status-new', color: '#fff3cd' },
            'Working - Contacted': { class: 'status-working', color: '#f8d7da' },
            'Contacted - Interested': { class: 'status-contacted', color: '#d1ecf1' },
            'Closed - Committed': { class: 'status-committed', color: '#d4edda' },
            'Database': { class: 'status-contacted', color: '#cfe2ff' },
            'Prospect - Prayer': { class: 'status-new', color: '#d1e7dd' }
        },
        
        dataProcessor: null,
        onChartClick: null,
        onRowClick: null,
        onRefresh: null,
        onExport: null,
        onYearFilterChange: null,
        onOwnerFilterChange: null
    };

    function EraCrmChart(element, options) {
        this.element = $(element);
        this.options = $.extend(true, {}, defaultOptions, options);
        this.chart = null;
        this.modalChart = null;
        this.chartData = {};
        
        this.init();
    }

    EraCrmChart.prototype = {
        init: function() {
            this.selectedBar = null;
            this.originalColors = [];
            this.processData();
            this.render();
            this.bindEvents();
        },

        filterByYear: function(items) {
            if (!this.options.enableYearFilter) {
                return items;
            }

            const targetYear = this.options.yearFilter;
            const mode = this.options.yearFilterMode;

            return items.filter(item => {
                if (!item.CreatedDate) return false;
                
                const createdDate = new Date(item.CreatedDate);
                const year = createdDate.getFullYear();
                
                switch(mode) {
                    case 'equal':
                        return year === targetYear;
                    case 'greater':
                        return year > targetYear;
                    case 'less':
                        return year < targetYear;
                    default:
                        return year === targetYear;
                }
            });
        },

        processData: function() {
            if (this.options.dataProcessor && typeof this.options.dataProcessor === 'function') {
                this.chartData = this.options.dataProcessor(this.options.data, this.options);
            } else {
                switch(this.options.groupBy) {
                    case 'month':
                        this.chartData = this.options.useMonthKeys ? 
                            this.processMonthKeyData() : this.processMonthlyData();
                        break;
                    case 'owner':
                        this.chartData = this.processOwnerData();
                        break;
                    case 'status':
                        this.chartData = this.processStatusData();
                        break;
                    case 'funnel':
                        this.chartData = this.processFunnelData();
                        break;
                    case 'owner-funnel':
                        this.chartData = this.processOwnerFunnelData();
                        break;
                    case 'owner-month':
                        this.chartData = this.processOwnerMonthlyData();
                        break;
                    case 'owner-funnel-view':
                        this.chartData = this.processOwnerFunnelView();
                        break;
                    case 'status-month':
                        this.chartData = this.processOwnerStatusData();
                        break;
                    default:
                        this.chartData = this.options.useMonthKeys ? 
                            this.processMonthKeyData() : this.processMonthlyData();
                }
            }
            
            // Apply custom colors if provided
            this.applyCustomColors();
        },

        applyCustomColors: function() {
            if (!this.chartData.colors || !this.chartData.labels) return;
            
            // If chartColors is an array, use it directly
            if (Array.isArray(this.options.chartColors)) {
                this.chartData.colors = this.chartData.labels.map((label, index) => {
                    return this.options.chartColors[index] || this.options.chartColor;
                });
            }
            // If chartColors is a function, call it for each bar
            else if (typeof this.options.chartColors === 'function') {
                this.chartData.colors = this.chartData.labels.map((label, index) => {
                    const count = this.chartData.counts[index];
                    return this.options.chartColors(label, index, count) || this.options.chartColor;
                });
            }
        },

        processMonthlyData: function() {
            const labels = [];
            const counts = [];
            const colors = [];
            const dataMap = {};
            
            const currentYear = this.options.yearFilter;
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            
            const monthsData = {};
            monthNames.forEach(month => {
                monthsData[month] = [];
            });

            const data = this.options.data;
            if (data.msg && data.msg.ownerOrder && data.msg[this.options.dataType]) {
                data.msg.ownerOrder.forEach(ownerId => {
                    const items = data.msg[this.options.dataType][ownerId] || [];
                    const filteredItems = this.filterByYear(items);
                    
                    filteredItems.forEach(item => {
                        if (!item.CreatedDate) return;
                        
                        const createdDate = new Date(item.CreatedDate);
                        if (isNaN(createdDate.getTime())) return;
                        
                        const monthIndex = createdDate.getMonth();
                        const monthName = monthNames[monthIndex];
                        
                        if (monthsData[monthName]) {
                            monthsData[monthName].push(item);
                        }
                    });
                });
            }

            monthNames.forEach(month => {
                const monthItems = monthsData[month];
                if (monthItems.length > 0) {
                    const label = month + ' ' + currentYear;
                    labels.push(label);
                    counts.push(monthItems.length);
                    colors.push(this.options.chartColor);
                    dataMap[label] = {
                        name: month,
                        items: monthItems
                    };
                }
            });

            return { labels, counts, colors, dataMap };
        },

        processMonthKeyData: function() {
            const labels = [];
            const counts = [];
            const colors = [];
            const dataMap = {};
            
            const data = this.options.data;
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            
            if (data.msg && data.msg[this.options.dataType]) {
                const dataByMonth = data.msg[this.options.dataType];
                const sortedKeys = Object.keys(dataByMonth).sort().reverse();
                
                sortedKeys.forEach(key => {
                    const monthData = dataByMonth[key];
                    
                    if (monthData.opportunities && monthData.opportunities.length > 0) {
                        const [year, monthNum] = key.split('-');
                        const monthIndex = parseInt(monthNum) - 1;
                        const monthName = monthNames[monthIndex];
                        const label = monthName + ' ' + year;
                        
                        labels.push(label);
                        counts.push(monthData.count || monthData.opportunities.length);
                        colors.push(monthData.color || this.options.chartColor);
                        dataMap[label] = {
                            name: monthName,
                            items: monthData.opportunities,
                            count: monthData.count
                        };
                    }
                });
            }

            return { labels, counts, colors, dataMap };
        },

        processOwnerData: function() {
            const labels = [];
            const counts = [];
            const colors = [];
            const dataMap = {};
            
            const data = this.options.data;
            const colorList = data.msg.colorList || {};
            
            if (data.msg && data.msg.ownerOrder && data.msg[this.options.dataType]) {
                data.msg.ownerOrder.forEach(ownerId => {
                    const items = data.msg[this.options.dataType][ownerId] || [];
                    const filteredItems = this.filterByYear(items);
                    const ownerName = data.msg.ownerList[ownerId] || ownerId;
                    
                    if (filteredItems.length > 0) {
                        labels.push(ownerName);
                        counts.push(filteredItems.length);
                        colors.push(colorList[ownerId] || this.options.chartColor);
                        dataMap[ownerName] = {
                            name: ownerName,
                            items: filteredItems
                        };
                    }
                });
            }

            return { labels, counts, colors, dataMap };
        },

        processStatusData: function() {
            const labels = [];
            const counts = [];
            const colors = [];
            const dataMap = {};
            const statusGroups = {};
            
            const data = this.options.data;
            
            if (data.msg && data.msg.ownerOrder && data.msg[this.options.dataType]) {
                data.msg.ownerOrder.forEach(ownerId => {
                    const items = data.msg[this.options.dataType][ownerId] || [];
                    const filteredItems = this.filterByYear(items);
                    
                    filteredItems.forEach(item => {
                        const status = item.LeadStatus || item.Status || 'Unknown';
                        if (!statusGroups[status]) {
                            statusGroups[status] = [];
                        }
                        statusGroups[status].push(item);
                    });
                });
            }

            // Use statusOrder to sort the status groups
            const sortedStatuses = this.getSortedStatuses(Object.keys(statusGroups));
            
            sortedStatuses.forEach(status => {
                labels.push(status);
                counts.push(statusGroups[status].length);
                const badgeConfig = this.options.badges[status];
                colors.push(badgeConfig ? badgeConfig.color : this.options.chartColor);
                dataMap[status] = {
                    name: status,
                    items: statusGroups[status]
                };
            });

            return { labels, counts, colors, dataMap };
        },

        processFunnelData: function() {
            const statusOrder = this.options.statusOrder || [
                'New Lead',
                'Working - Contacted',
                'Contacted - Interested',
                'Closed - Committed'
            ];
            
            const labels = [];
            const counts = [];
            const colors = [];
            const percentages = [];
            const conversionRates = [];
            const dataMap = {};
            const statusGroups = {};
            
            const data = this.options.data;
            
            // Collect all items by status
            if (data.msg && data.msg.ownerOrder && data.msg[this.options.dataType]) {
                data.msg.ownerOrder.forEach(ownerId => {
                    const items = data.msg[this.options.dataType][ownerId] || [];
                    const filteredItems = this.filterByYear(items);
                    
                    filteredItems.forEach(item => {
                        const status = item.LeadStatus || item.Status || 'Unknown';
                        if (!statusGroups[status]) {
                            statusGroups[status] = [];
                        }
                        statusGroups[status].push(item);
                    });
                });
            }

            const total = Object.values(statusGroups).reduce((sum, items) => sum + items.length, 0);
            let previousCount = 0;

            // Use the configured status order
            statusOrder.forEach((status, index) => {
                if (statusGroups[status] && statusGroups[status].length > 0) {
                    const count = statusGroups[status].length;
                    const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                    
                    // Calculate conversion rate from previous stage
                    let conversionRate = 100;
                    if (index > 0 && previousCount > 0) {
                        conversionRate = ((count / previousCount) * 100).toFixed(1);
                    }
                    
                    labels.push(status);
                    counts.push(count);
                    percentages.push(parseFloat(percentage));
                    conversionRates.push(parseFloat(conversionRate));
                    
                    const badgeConfig = this.options.badges[status];
                    colors.push(badgeConfig ? badgeConfig.color : this.options.chartColor);
                    
                    dataMap[status] = {
                        name: status,
                        items: statusGroups[status],
                        percentage: percentage,
                        conversionRate: conversionRate
                    };
                    
                    previousCount = count;
                }
            });

            // Calculate final conversion rate (New Lead to Closed - Committed)
            const firstStatus = statusOrder[0];
            const lastStatus = statusOrder[statusOrder.length - 1];
            const finalConversionRate = statusGroups[firstStatus] && statusGroups[lastStatus] 
                ? ((statusGroups[lastStatus].length / statusGroups[firstStatus].length) * 100).toFixed(1)
                : 0;

            return { 
                labels, 
                counts, 
                colors, 
                dataMap, 
                percentages, 
                total, 
                conversionRates, 
                finalConversionRate 
            };
        },

        processOwnerFunnelData: function() {
            const statusOrder = this.options.statusOrder || [
                'New Lead',
                'Working - Contacted',
                'Contacted - Interested',
                'Closed - Committed'
            ];
            
            const data = this.options.data;
            const ownerData = {};
            
            if (data.msg && data.msg.ownerOrder && data.msg[this.options.dataType]) {
                data.msg.ownerOrder.forEach(ownerId => {
                    const ownerName = data.msg.ownerList[ownerId] || ownerId;
                    const items = data.msg[this.options.dataType][ownerId] || [];
                    const filteredItems = this.filterByYear(items);
                    
                    if (filteredItems.length === 0) return;
                    
                    const statusGroups = {};
                    filteredItems.forEach(item => {
                        const status = item.LeadStatus || item.Status || 'Unknown';
                        if (!statusGroups[status]) {
                            statusGroups[status] = [];
                        }
                        statusGroups[status].push(item);
                    });
                    
                    const total = filteredItems.length;
                    const datasets = [];
                    const dataMap = {};
                    
                    // Use status order for consistent ordering
                    statusOrder.forEach(status => {
                        if (statusGroups[status]) {
                            const count = statusGroups[status].length;
                            const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                            
                            datasets.push({
                                label: status,
                                data: [parseFloat(percentage)],
                                backgroundColor: this.options.badges[status]?.color || this.options.chartColor,
                                count: count
                            });
                            
                            dataMap[status] = {
                                name: status,
                                items: statusGroups[status],
                                percentage: percentage
                            };
                        }
                    });
                    
                    ownerData[ownerName] = {
                        datasets: datasets,
                        dataMap: dataMap,
                        total: total
                    };
                });
            }
            
            return ownerData;
        },

        processOwnerMonthlyData: function() {
            const labels = [];
            const counts = [];
            const colors = [];
            const dataMap = {};
            
            const currentYear = this.options.yearFilter;
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            
            const monthsData = {};
            monthNames.forEach(month => {
                monthsData[month] = [];
            });

            const data = this.options.data;
            
            if (!this.options.selectedOwner) {
                return { labels, counts, colors, dataMap };
            }
            
            if (data.msg && data.msg[this.options.dataType]) {
                const items = data.msg[this.options.dataType][this.options.selectedOwner] || [];
                const filteredItems = this.filterByYear(items);
                
                filteredItems.forEach(item => {
                    if (!item.CreatedDate) return;
                    
                    const createdDate = new Date(item.CreatedDate);
                    if (isNaN(createdDate.getTime())) return;
                    
                    const monthIndex = createdDate.getMonth();
                    const monthName = monthNames[monthIndex];
                    
                    if (monthsData[monthName]) {
                        monthsData[monthName].push(item);
                    }
                });
            }

            monthNames.forEach(month => {
                const monthItems = monthsData[month];
                if (monthItems.length > 0) {
                    const label = month + ' ' + currentYear;
                    labels.push(label);
                    counts.push(monthItems.length);
                    colors.push(this.options.chartColor);
                    dataMap[label] = {
                        name: month,
                        items: monthItems
                    };
                }
            });

            return { labels, counts, colors, dataMap };
        },

        processOwnerFunnelView: function() {
            const statusOrder = this.options.statusOrder || [
                'New Lead',
                'Working - Contacted',
                'Contacted - Interested',
                'Closed - Committed'
            ];
            
            const labels = [];
            const counts = [];
            const colors = [];
            const percentages = [];
            const conversionRates = [];
            const dataMap = {};
            const statusGroups = {};
            
            const data = this.options.data;
            
            if (!this.options.selectedOwner) {
                return { labels, counts, colors, dataMap, percentages, total: 0, conversionRates, finalConversionRate: 0 };
            }
            
            // Collect items for selected owner by status
            if (data.msg && data.msg[this.options.dataType]) {
                const items = data.msg[this.options.dataType][this.options.selectedOwner] || [];
                const filteredItems = this.filterByYear(items);
                
                filteredItems.forEach(item => {
                    const status = item.LeadStatus || item.Status || 'Unknown';
                    if (!statusGroups[status]) {
                        statusGroups[status] = [];
                    }
                    statusGroups[status].push(item);
                });
            }

            const total = Object.values(statusGroups).reduce((sum, items) => sum + items.length, 0);
            let previousCount = 0;

            // Use the configured status order
            statusOrder.forEach((status, index) => {
                if (statusGroups[status] && statusGroups[status].length > 0) {
                    const count = statusGroups[status].length;
                    const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;
                    
                    let conversionRate = 100;
                    if (index > 0 && previousCount > 0) {
                        conversionRate = ((count / previousCount) * 100).toFixed(1);
                    }
                    
                    labels.push(status);
                    counts.push(count);
                    percentages.push(parseFloat(percentage));
                    conversionRates.push(parseFloat(conversionRate));
                    
                    const badgeConfig = this.options.badges[status];
                    colors.push(badgeConfig ? badgeConfig.color : this.options.chartColor);
                    
                    dataMap[status] = {
                        name: status,
                        items: statusGroups[status],
                        percentage: percentage,
                        conversionRate: conversionRate
                    };
                    
                    previousCount = count;
                }
            });

            // Calculate final conversion rate
            const firstStatus = statusOrder[0];
            const lastStatus = statusOrder[statusOrder.length - 1];
            const finalConversionRate = statusGroups[firstStatus] && statusGroups[lastStatus] 
                ? ((statusGroups[lastStatus].length / statusGroups[firstStatus].length) * 100).toFixed(1)
                : 0;

            return { 
                labels, 
                counts, 
                colors, 
                dataMap, 
                percentages, 
                total, 
                conversionRates, 
                finalConversionRate 
            };
        },
        
        processOwnerStatusData: function() {
            const labels = [];
            const counts = [];
            const colors = [];
            const dataMap = {};
            const statusGroups = {};
            
            const data = this.options.data;
        
            // No owner selected → return empty structure
            if (!this.options.selectedOwner) {
                return { labels, counts, colors, dataMap };
            }
        
            if (data.msg && data.msg[this.options.dataType]) {
                const items = data.msg[this.options.dataType][this.options.selectedOwner] || [];
                const filteredItems = this.filterByYear(items);
        
                filteredItems.forEach(item => {
                    const status = item.LeadStatus || item.Status || 'Unknown';
        
                    if (!statusGroups[status]) {
                        statusGroups[status] = [];
                    }
        
                    statusGroups[status].push(item);
                });
            }
        
            // Use status order to sort the status groups
            const sortedStatuses = this.getSortedStatuses(Object.keys(statusGroups));
            
            sortedStatuses.forEach(status => {
                labels.push(status);
                counts.push(statusGroups[status].length);
        
                const badgeConfig = this.options.badges[status];
                colors.push(badgeConfig ? badgeConfig.color : this.options.chartColor);
        
                dataMap[status] = {
                    name: status,
                    items: statusGroups[status]
                };
            });
        
            return { labels, counts, colors, dataMap };
        },
        
        // Helper method to sort statuses according to statusOrder
        getSortedStatuses: function(statuses) {
            const statusOrder = this.options.statusOrder || [];
            
            return statuses.sort((a, b) => {
                const indexA = statusOrder.indexOf(a);
                const indexB = statusOrder.indexOf(b);
                
                // If both are in statusOrder, sort by their order
                if (indexA !== -1 && indexB !== -1) {
                    return indexA - indexB;
                }
                // If only A is in statusOrder, A comes first
                if (indexA !== -1) {
                    return -1;
                }
                // If only B is in statusOrder, B comes first
                if (indexB !== -1) {
                    return 1;
                }
                // If neither is in statusOrder, sort alphabetically
                return a.localeCompare(b);
            });
        },

        render: function() {
            const yearFilterHtml = this.options.enableYearFilter ? `
                <div class="era-crm-year-filter">
                    <select class="era-crm-year-select era-year-mode">
                        <option value="equal" ${this.options.yearFilterMode === 'equal' ? 'selected' : ''}>Year =</option>
                        <option value="greater" ${this.options.yearFilterMode === 'greater' ? 'selected' : ''}>Year ></option>
                        <option value="less" ${this.options.yearFilterMode === 'less' ? 'selected' : ''}>Year <</option>
                    </select>
                    <select class="era-crm-year-select era-year-value">
                        ${this.generateYearOptions()}
                    </select>
                </div>
            ` : '';

            const ownerFilterHtml = this.options.enableOwnerFilter ? `
                <div class="era-crm-year-filter">
                    <select class="era-crm-year-select era-owner-select">
                        <option value="">Select Owner</option>
                        ${this.generateOwnerOptions()}
                    </select>
                </div>
            ` : '';

            // Check if this is a funnel chart
            const isFunnel = this.options.groupBy === 'funnel' || this.options.groupBy === 'owner-funnel-view';
            
            let chartContainerHtml = '';
            if (isFunnel) {
                chartContainerHtml = '<div class="era-funnel-container"></div>';
            } else {
                chartContainerHtml = `
                    <div class="era-crm-bar-chart-chart-container" style="height: ${this.options.height};min-height: ${this.options.minHeight};">
                        <canvas class="era-main-chart"></canvas>
                    </div>
                `;
            }

            const html = `
                <div class="era-crm-bar-chart-container">
                    <div class="era-crm-bar-chart-header">
                        <div class="era-crm-bar-chart-header-left">
                            <h1>${this.options.title}</h1>
                        </div>
                        <div class="era-crm-bar-chart-header-right">
                            ${ownerFilterHtml}
                            ${yearFilterHtml}
                            <span class="era-crm-bar-chart-refresh-icon"><i class="bi bi-arrow-clockwise"></i></span>
                            <button class="era-crm-bar-chart-fullscreen-btn"><i class="bi bi-arrows-fullscreen"></i></button>
                        </div>
                    </div>
                    ${chartContainerHtml}
                </div>

                <div class="era-crm-bar-chart-modal" style="display: none;">
                    <div class="era-crm-bar-chart-modal-content">
                        <div class="era-crm-bar-chart-modal-header">
                            <h2 class="era-modal-title">Details</h2>
                            <span class="era-crm-bar-chart-close"><i class="bi bi-x"></i></span>
                        </div>
                        <div class="era-crm-bar-chart-modal-body">
                            ${this.options.enableSearch ? `
                            <div class="era-crm-bar-chart-toolbar">
                                <input type="text" class="era-crm-bar-chart-search-box" 
                                    placeholder="Search ${this.options.dataType}...">
                                ${this.options.enableExport ? '<button class="era-crm-bar-chart-export-btn"><i class="bi bi-download"></i> Export</button>' : ''}
                            </div>
                            ` : ''}

                            <div class="era-crm-bar-chart-modal-chart-container" style="height: ${this.options.modalHeight}">
                                ${isFunnel ? '<div class="era-funnel-container era-modal-funnel"></div>' : '<canvas class="era-modal-chart"></canvas>'}
                            </div>

                            <div class="era-crm-bar-chart-table-section" style="display: none;">
                                <div class="era-crm-bar-chart-breadcrumb">
                                    <span class="era-breadcrumb-text">Details</span>
                                </div>

                                <div class="era-crm-bar-chart-group-header"></div>

                                <table class="era-crm-bar-chart-table">
                                    <thead>
                                        <tr>
                                            ${this.options.columns.map(col => `<th>${col.label}</th>`).join('')}
                                        </tr>
                                    </thead>
                                    <tbody class="era-table-body">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            this.element.html(html);
            
            setTimeout(() => {
                if (isFunnel) {
                    this.renderFunnelChart(this.element.find('.era-funnel-container').first());
                } else {
                    this.initChart();
                }
            }, 100);
        },

        generateYearOptions: function() {
            const currentYear = new Date().getFullYear();
            let options = '';
            for (let year = currentYear - 5; year <= currentYear + 5; year++) {
                const selected = year === this.options.yearFilter ? 'selected' : '';
                options += `<option value="${year}" ${selected}>${year}</option>`;
            }
            return options;
        },

        generateOwnerOptions: function() {
            const data = this.options.data;
            let options = '';
            
            if (data.msg && data.msg.ownerOrder && data.msg.ownerList) {
                data.msg.ownerOrder.forEach(ownerId => {
                    const ownerName = data.msg.ownerList[ownerId] || ownerId;
                    const selected = this.options.selectedOwner === ownerId ? 'selected' : '';
                    options += `<option value="${ownerId}" ${selected}>${ownerName}</option>`;
                });
            }
            
            return options;
        },

        renderFunnelChart: function(container, isModal = false) {
            const data = this.chartData;
            const maxCount = Math.max(...data.counts);
            
            let funnelHtml = '<div class="era-funnel-chart">';
            
            data.labels.forEach((label, index) => {
                const count = data.counts[index];
                const percentage = data.percentages[index];
                const conversionRate = data.conversionRates[index];
                const widthPercent = (count / maxCount) * 100;
                const isFinalStage = index === data.labels.length - 1;
                
                funnelHtml += `
                    <div class="era-funnel-stage" data-stage="${label}" data-index="${index}">
                        <div class="era-funnel-count">${count}</div>
                        <div class="era-funnel-bar ${isFinalStage ? 'final-stage' : 'regular-stage'}" 
                             style="width: ${widthPercent}%">
                            ${index > 0 ? `<div class="era-funnel-conversion-rate">${conversionRate}%</div>` : ''}
                            <div class="era-funnel-conversion">${percentage}%</div>
                        </div>
                        <div class="era-funnel-label">${label}</div>
                    </div>
                `;
            });
            
            funnelHtml += '</div>';
            
            // Add total conversion indicator
            if (data.finalConversionRate) {
                funnelHtml += `
                    <div class="era-funnel-total-conversion">
                        <div class="era-funnel-total-percentage">${data.finalConversionRate}%</div>
                        <div class="era-funnel-total-label">Conversion to Closed-Committed</div>
                    </div>
                `;
            }
            
            container.html(funnelHtml);
            
            // Bind click events
            const self = this;
            container.find('.era-funnel-stage').on('click', function() {
                const label = $(this).data('stage');
                if (isModal) {
                    self.showTable(label);
                } else {
                    self.showModal(label);
                }
            });
        },

        initChart: function() {
            const canvas = this.element.find('.era-main-chart')[0];
            const ctx = canvas.getContext('2d');
            
            // Store original colors - create a deep copy
            this.originalColors = this.chartData.colors.map(c => c);
            
            const self = this;
            
            let chartConfig = {
                type: this.options.chartType,
                data: {
                    labels: this.chartData.labels,
                    datasets: [{
                        label: this.options.dataType.charAt(0).toUpperCase() + this.options.dataType.slice(1) + ' Count',
                        data: this.chartData.counts,
                        backgroundColor: this.chartData.colors.map(c => c),
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    if (self.chartData.percentages) {
                                        return self.options.dataType + ': ' + context.parsed.y + ' (' + self.chartData.percentages[context.dataIndex] + '%)';
                                    }
                                    return self.options.dataType + ': ' + context.parsed.y;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            },
                            grid: {
                                display: true,
                                color: '#f0f0f0'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    onClick: (evt, elements) => {
                        if (elements.length > 0) {
                            const index = elements[0].index;
                            const label = self.chartData.labels[index];
                            
                            // Update selected bar and colors
                            self.selectedBar = index;
                            self.updateChartColors(index);
                            
                            // Show modal with data
                            self.showModal(label);
                            
                            if (self.options.onChartClick) {
                                self.options.onChartClick(label, self.chartData.dataMap[label]);
                            }
                        }
                    }
                }
            };

            // Handle owner-funnel special case
            if (this.options.groupBy === 'owner-funnel') {
                const ownerNames = Object.keys(this.chartData);
                if (ownerNames.length > 0) {
                    const firstOwner = ownerNames[0];
                    chartConfig.data = {
                        labels: [firstOwner],
                        datasets: this.chartData[firstOwner].datasets
                    };
                    chartConfig.type = 'bar';
                    chartConfig.options.plugins.legend.display = true;
                    chartConfig.options.scales.x.stacked = true;
                    chartConfig.options.scales.y.stacked = true;
                }
            }
            
            this.chart = new Chart(ctx, chartConfig);
        },

        updateChartColors: function(selectedIndex) {
            if (!this.chart || !this.originalColors || this.originalColors.length === 0) return;
            
            const newColors = [];
            for (let i = 0; i < this.originalColors.length; i++) {
                if (i === selectedIndex) {
                    newColors.push(this.originalColors[i]); // Keep original color for selected
                } else {
                    newColors.push(this.dimColor(this.originalColors[i])); // Dim other bars
                }
            }
            
            this.chart.data.datasets[0].backgroundColor = newColors;
            this.chart.update('none'); // Update without animation for immediate effect
        },

        dimColor: function(color) {
            // Convert color to rgba with reduced opacity
            if (color.startsWith('#')) {
                const r = parseInt(color.slice(1, 3), 16);
                const g = parseInt(color.slice(3, 5), 16);
                const b = parseInt(color.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, 0.3)`;
            } else if (color.startsWith('rgba')) {
                // If already rgba, replace the alpha value
                return color.replace(/[\d.]+\)$/g, '0.3)');
            } else if (color.startsWith('rgb')) {
                // Convert rgb to rgba
                return color.replace('rgb', 'rgba').replace(')', ', 0.3)');
            }
            // Default fallback
            return color;
        },

        resetChartColors: function() {
            if (!this.originalColors || this.originalColors.length === 0) return;
            
            this.selectedBar = null;
            const resetColors = this.originalColors.map(c => c);
            
            // Reset main chart colors
            if (this.chart) {
                this.chart.data.datasets[0].backgroundColor = resetColors.map(c => c);
                this.chart.update('none');
            }
            
            // Reset modal chart colors if exists
            if (this.modalChart) {
                this.modalChart.data.datasets[0].backgroundColor = resetColors.map(c => c);
                this.modalChart.update('none');
            }
        },

        initModalChart: function() {
            if (this.modalChart) {
                this.modalChart.destroy();
            }

            const isFunnel = this.options.groupBy === 'funnel' || this.options.groupBy === 'owner-funnel-view';
            
            if (isFunnel) {
                this.renderFunnelChart(this.element.find('.era-modal-funnel'), true);
                return;
            }

            const canvas = this.element.find('.era-modal-chart')[0];
            const ctx = canvas.getContext('2d');
            
            const self = this;
            
            // Use the same colors as main chart (including any dimming)
            const currentColors = this.chart && this.chart.data.datasets[0].backgroundColor 
                ? this.chart.data.datasets[0].backgroundColor.map(c => c)
                : this.chartData.colors.map(c => c);
            
            this.modalChart = new Chart(ctx, {
                type: this.options.chartType,
                data: {
                    labels: this.chartData.labels,
                    datasets: [{
                        label: this.options.dataType.charAt(0).toUpperCase() + this.options.dataType.slice(1) + ' Count',
                        data: this.chartData.counts,
                        backgroundColor: currentColors,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    onClick: (evt, elements) => {
                        if (elements.length > 0) {
                            const index = elements[0].index;
                            const label = self.chartData.labels[index];
                            
                            // Update selected bar in modal
                            self.selectedBar = index;
                            self.updateModalChartColors(index);
                            
                            // Show table
                            self.showTable(label);
                        }
                    }
                }
            });
        },

        updateModalChartColors: function(selectedIndex) {
            if (!this.modalChart || !this.originalColors || this.originalColors.length === 0) return;
            
            const newColors = [];
            for (let i = 0; i < this.originalColors.length; i++) {
                if (i === selectedIndex) {
                    newColors.push(this.originalColors[i]); // Keep original color for selected
                } else {
                    newColors.push(this.dimColor(this.originalColors[i])); // Dim other bars
                }
            }
            
            this.modalChart.data.datasets[0].backgroundColor = newColors;
            this.modalChart.update('none'); // Update without animation for immediate effect
            
            // Also update main chart colors
            if (this.chart) {
                this.chart.data.datasets[0].backgroundColor = newColors.map(c => c);
                this.chart.update('none');
            }
        },

        showModal: function(label) {
            this.element.find('.era-crm-bar-chart-modal').fadeIn(200);
            this.element.find('.era-modal-title').text(this.options.title);
            this.initModalChart();
            
            // If label is provided, show the table immediately
            if (label) {
                this.showTable(label);
            } else {
                // Hide table if no label (fullscreen mode)
                this.element.find('.era-crm-bar-chart-table-section').hide();
            }
        },

        showTable: function(label) {
            const groupData = this.chartData.dataMap[label];
            if (!groupData) return;

            this.element.find('.era-breadcrumb-text').text(this.options.dataType + ' | ' + label);
            
            let headerText = '▼ ' + label + ' (' + groupData.items.length + ')';
            if (groupData.percentage) {
                headerText += ' - ' + groupData.percentage + '%';
            }
            this.element.find('.era-crm-bar-chart-group-header').text(headerText);

            const tableBody = this.element.find('.era-table-body');
            tableBody.empty();

            groupData.items.forEach(item => {
                const cells = this.options.columns.map(col => {
                    const value = item[col.key] || '-';
                    
                    if (col.render === 'badge') {
                        const badgeConfig = this.options.badges[value];
                        const badgeClass = badgeConfig ? badgeConfig.class : '';
                        return `<td><span class="era-crm-bar-chart-status-badge ${badgeClass}">${value}</span></td>`;
                    } else if (col.render && typeof col.render === 'function') {
                        return `<td>${col.render(value, item)}</td>`;
                    } else if (col.key === 'Name') {
                        return `<td><strong>${value}</strong></td>`;
                    } else {
                        return `<td>${value}</td>`;
                    }
                }).join('');

                const row = $(`<tr>${cells}</tr>`);
                
                if (this.options.onRowClick) {
                    row.css('cursor', 'pointer').on('click', () => {
                        this.options.onRowClick(item);
                    });
                }
                
                tableBody.append(row);
            });

            this.element.find('.era-crm-bar-chart-table-section').fadeIn(300);
        },

        bindEvents: function() {
            const self = this;

            // Owner filter event
            this.element.find('.era-owner-select').on('change', function() {
                self.options.selectedOwner = $(this).val();
                self.processData();
                
                if (self.chart) {
                    self.chart.destroy();
                }
                
                const isFunnel = self.options.groupBy === 'funnel' || self.options.groupBy === 'owner-funnel-view';
                if (isFunnel) {
                    self.renderFunnelChart(self.element.find('.era-funnel-container').first());
                } else {
                    self.initChart();
                }
                
                if (self.options.onOwnerFilterChange) {
                    self.options.onOwnerFilterChange(self.options.selectedOwner);
                }
            });

            // Year filter events
            this.element.find('.era-year-mode').on('change', function() {
                self.options.yearFilterMode = $(this).val();
                self.processData();
                
                if (self.chart) {
                    self.chart.destroy();
                }
                
                const isFunnel = self.options.groupBy === 'funnel' || self.options.groupBy === 'owner-funnel-view';
                if (isFunnel) {
                    self.renderFunnelChart(self.element.find('.era-funnel-container').first());
                } else {
                    self.initChart();
                }
                
                if (self.options.onYearFilterChange) {
                    self.options.onYearFilterChange(self.options.yearFilter, self.options.yearFilterMode);
                }
            });

            this.element.find('.era-year-value').on('change', function() {
                self.options.yearFilter = parseInt($(this).val());
                self.processData();
                
                if (self.chart) {
                    self.chart.destroy();
                }
                
                const isFunnel = self.options.groupBy === 'funnel' || self.options.groupBy === 'owner-funnel-view';
                if (isFunnel) {
                    self.renderFunnelChart(self.element.find('.era-funnel-container').first());
                } else {
                    self.initChart();
                }
                
                if (self.options.onYearFilterChange) {
                    self.options.onYearFilterChange(self.options.yearFilter, self.options.yearFilterMode);
                }
            });

            this.element.find('.era-crm-bar-chart-fullscreen-btn').on('click', function() {
                self.showModal(null); // Pass null to not show any data initially
            });

            this.element.find('.era-crm-bar-chart-refresh-icon').on('click', function() {
                $(this).css('transform', 'rotate(360deg)');
                setTimeout(() => {
                    $(this).css('transform', 'rotate(0deg)');
                }, 500);

                if (self.options.onRefresh) {
                    self.options.onRefresh();
                }
            });

            this.element.find('.era-crm-bar-chart-close').on('click', function() {
                self.element.find('.era-crm-bar-chart-modal').fadeOut(200);
                self.element.find('.era-crm-bar-chart-table-section').hide();
                self.resetChartColors(); // Reset colors when modal closes
            });

            this.element.find('.era-crm-bar-chart-modal').on('click', function(e) {
                if ($(e.target).is('.era-crm-bar-chart-modal')) {
                    $(this).fadeOut(200);
                    self.element.find('.era-crm-bar-chart-table-section').hide();
                    self.resetChartColors(); // Reset colors when modal closes
                }
            });

            if (this.options.enableSearch) {
                this.element.find('.era-crm-bar-chart-search-box').on('keyup', function() {
                    const value = $(this).val().toLowerCase();
                    self.element.find('.era-table-body tr').filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                    });
                });
            }

            if (this.options.enableExport) {
                this.element.find('.era-crm-bar-chart-export-btn').on('click', function() {
                    if (self.options.onExport) {
                        self.options.onExport(self.chartData);
                    } else {
                        self.exportToCSV();
                    }
                });
            }
        },

        exportToCSV: function() {
            const headers = this.options.columns.map(col => col.label).join(',');
            let csv = headers + '\n';

            Object.values(this.chartData.dataMap).forEach(group => {
                group.items.forEach(item => {
                    const row = this.options.columns.map(col => {
                        const value = item[col.key] || '';
                        return '"' + String(value).replace(/"/g, '""') + '"';
                    }).join(',');
                    csv += row + '\n';
                });
            });

            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = this.options.dataType + '_export_' + new Date().getTime() + '.csv';
            a.click();
            window.URL.revokeObjectURL(url);
        },

        refresh: function(newData) {
            this.options.data = newData;
            this.processData();
            
            if (this.chart) {
                this.chart.destroy();
            }
            if (this.modalChart) {
                this.modalChart.destroy();
            }
            
            this.render();
            this.bindEvents();
        },

        updateOptions: function(newOptions) {
            $.extend(this.options, newOptions);
            this.refresh(this.options.data);
        },

        destroy: function() {
            if (this.chart) {
                this.chart.destroy();
            }
            if (this.modalChart) {
                this.modalChart.destroy();
            }
            this.element.empty();
            this.element.removeData('eraCrmChart');
        }
    };

    $.fn.eraCrmChart = function(options) {
        const args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            const $this = $(this);
            let instance = $this.data('eraCrmChart');

            if (!instance) {
                instance = new EraCrmChart(this, options);
                $this.data('eraCrmChart', instance);
            } else if (typeof options === 'string' && instance[options]) {
                instance[options].apply(instance, args);
            }
        });
    };

})(jQuery);
