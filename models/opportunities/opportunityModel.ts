export interface OpportunityModel {
    name: string;
    account: string;
    amount: string;
    salesStage: string;
    expectedCloseDate: string;
    }

export const testOpportunity: OpportunityModel = {
    name: 'New Opportunity Project',
    account: 'NTT Data',
    amount: '100000',
    salesStage: 'Prospecting',
    expectedCloseDate: '12/31/2025'
};
