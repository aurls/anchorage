export interface Params {
  age: number
  businessTravel: 'Non-Travel' | 'Travel Frequently' | 'Travel_Rarely'
  dailyRate: number
  department: 'Human Resources' | 'Research & Development' | 'Sales'
  distanceFromHome: number
  education: number
  educationField: 'Human Resources' | 'Life Sciences' | 'Marketing' | 'Medical' | 'Other' | 'Technical Degree'
  environmentSatisfaction: number
  gender: 'Female' | 'Male'
  hourlyRate: number
  jobInvolvement: number
  jobLevel: number
  jobRole: 'Healthcare Representative' | 'Human Resources' | 'Laboratory Technician' | 'Manager' | 'Manufacturing Director' | 'Research Director' | 'Research Scientist' | 'Sales Executive' | 'Sales Representative'
  jobSatisfaction: number
  maritalStatus: 'Divorced' | 'Married' | 'Single'
  monthlyIncome: number
  monthlyRate: number
  numCompaniesWorked: number
  overTime: 'Yes' | 'No'
  percentSalaryHike: number
  performanceRating: number
  relationshipSatisfaction: number
  stockOptionLevel: number
  totalWorkingYears: number
  trainingTimesLastYear: number
  workLifeBalance: number
  yearsAtCompany: number
  yearsInCurrentRole: number
  yearsSinceLastPromotion: number
  yearsWithCurrManager: number
}
