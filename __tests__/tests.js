import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import  Tags from  "../components/departments/Tags"
import  DoctorDetails from "../components/doctor/DoctorDetails"
import DoctorCard from "../components/doctor/DoctorCard"
import Choose from "../components/about/Choose"
import GenericModal from '../components/common/GenericModal'
import AppointmentsInfo from "../components/ScheduleAppointments/AppointmentsInfo"

describe('Tags in the Blog', () => {

    
  
    it('The tags should be correcty rendered for department Blog', () => {
      render(<Tags/>)
      expect(screen.getByRole('tag')).toBeInTheDocument()
    
    })
  
   
  
  })
  describe('Doctors', () => {

    
  
    it('Doctor cards should be rendered correctly', () => {
      render(<DoctorCard/>)
      expect(screen.getByRole('doc')).toBeInTheDocument()
    
    })
  
   
  
  })
  describe('About Us', () => {

    
  
    it('Selected section should have blue text ', () => {
      render(<Choose/>)
      expect(screen.getByRole('about')).toHaveClass('text-tertiaryblue-50')
    
    })
  
   
  
  })
  
  describe('Confirm An Appointment', () => {
 
    
  
    it('Confirming button', () => {
      render(<AppointmentsInfo></AppointmentsInfo>)
      const button=(screen.getByRole('app1'))
      fireEvent.click(button)
      expect(screen.getByRole('confirmed')).toBeInTheDocument();
    
    })
  
   
  
  })
  
  