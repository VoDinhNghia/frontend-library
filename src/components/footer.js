import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className='p-1'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Industrial University of Ho Chi Minh City
              </h6>
              <p>
              Trường Đại học Công nghiệp Thành phố Hồ Chí Minh là một trường đại học định hướng ứng dụng và thực hành, trực thuộc Bộ Công Thương, chuyên đào tạo nhóm ngành kinh tế công nghiệp và kỹ thuật công nghiệp, được thành lập từ ngày 24 tháng 12 năm 2004.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Educations</h6>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Branchs</h6>
              <p>
                Cơ sở Hồ Chí Minh
              </p>
              <p>
                Cơ sở Quảng Ngãi
              </p>
              <p>
                Cơ sở Thanh Hóa
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                {/* <MDBIcon icon="home" className="me-2" /> */}
                12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP. HCM
              </p>
              <p>
                email:
              </p>
              <p>
                Phone: +84 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Industrial University of Ho Chi Minh City
      </div>
    </MDBFooter>
  );
}