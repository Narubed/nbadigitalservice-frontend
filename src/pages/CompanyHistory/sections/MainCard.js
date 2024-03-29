import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './MainCard.scss';
// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

function BuiltByDevelopers() {
  const bgImage =
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg';

  return (
    <Container>
      <MKBox
        display="flex"
        alignItems="center"
        borderRadius="xl"
        my={2}
        py={3}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container>
          <Grid container item xs={12} lg={12}>
            <iframe
              width="100%"
              height="520"
              src="https://www.youtube.com/embed/3ZGcaGhkCTI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
        </Container>
      </MKBox>
      <div className="MainCard">
        <li>เอ็นบีเอ ดิจิตอล เซอร์วิส เซ็นเตอร์ จำกัด ก่อตั้งเมื่อ 2554</li>
        <li>
          โดยเป็นบุคคลธรรมดาประกอบธุรกิจให้บริการทางด้านสำนักงานบัญชี-การเงินภาษี
          และบริการทางด้านธุรกิจทั่วไป จนกระทั้งมาในปี 2563 ทั้งโลกประสบปัญหาปัญหาโรคระบาด
          ของเชื้อไวรัส โควิด-19 รวมทั้งในประเทศไทย คณะผู้บริหารจึงได้แปลสภาพจากบุคคลธรรมดา
          เป็นนิติบุคคล ในนามบริษัท เอ็นบีเอ ดิจิตอล เซอร์วิส เซ็นเตอร์ จำกัด
          “ของคนไทย..โดยคนไทย..เพื่อคนไทย”
        </li>
        <li>
          โดยเปลี่ยนแปลงแผนการบริหารจัดการ
          และการตลาดในยุดดิจิตอลจึงได้เล็งเห็นว่าในสภาวะการทำงานในยุคที่ต้องจำกัดการเดินทางการสัมผัส
          การเว้นระยะห่าง และการรับผิดชอบต่อสังคม
          มีความจำเป็นต้องใช้เทคโนโลยีดิจิตอลมาช่วยในการทำงานและการประกอบธุรกิจ
          เพื่อให้ตอบสนองภารกิจ ในธุรกิจที่ต้องดำเนินการไปในสภาวะปัจจุบันให้ได้ กระทั้งถึงปัจจุบัน
        </li>
        <li>
          เราได้พัฒนาและนำระบบดิจิตอลฯ มาใช้โดยทำเป็นแพลทฟอร์มทางธุรกิจ (platform)
          โดยเราเขียนโปรแกรมและพัฒนาระบบเองทั้งหมด โดยรวบรวมกิจกรรมทางธุรกิจ มาให้บริการในแพลทฟอร์ม
          “ระบบบริหารจัดการศูนย์” E-Branch เพื่อให้บริการลูกค้าทั่วประเทศในรูปแบบ
        </li>
        <li>
          ศูนย์บริการลูกค้าครบวงจรทางด้านธุรกิจของ เอ็นบีเอฯ (ระดับภาค ระดับเขต ระดับจังหวัด
          ระดับอำเภอ และระดับตำบล) ซึ่งบริการของเรา ตั้งแต่ให้คำปรึกษาเริ่มต้นประกอบกิจการ
          จนกระทั้งเลิกประกอบกิจการ อีกทั้งบริการทุกๆ ด้านทางธุรกิจ อธิเช่น สร้างแบรนด์สินค้า
          ให้บริการระบบบริหารจัดการครบวงจรทางด้าน แพลทฟอร์ม ธุรกิจ (platform)
          ซึ่งปัจจุบันให้บริการทั่วประเทศ 77 จังหวัด
        </li>
        <li>
          ให้บริการด้านเคาน์เตอร์เซอร์วิสฝากจ่ายค่าใช้จ่ายต่างๆ
          ผ่านระบบบริหารจัดการศูนย์ซึ่งเป็นบริการฝากจ่ายผ่านสำนักงานใหญ่ดำเนินการให้ทั้งหมดทุกรายจ่าย
          บริการด้านขนส่งพัสดุไปรษณีย์ในประเทศ-ต่างประเทศ ผ่านพันธมิตรทางธุรกิจหลายแบรนด์หลัก
          และให้บริการทางด้านธุรกิจครบวงจร ในการผลิตงานอธิเช่น ป้ายไวนิล สื่อสิ่งพิมพ์ทุกชนิด ตรายาง
          ป้ายไฟและป้ายทุกชนิด เขียนโปรแกรม เขียนเว็บไชต์ ออกแบบผลิตภัณฑ์ และสื่อการตลาด
          ร่วมทั้งการตลาดดิจิตอลทุกรูปแบบ รวมถึงการให้บริการแพลทฟอร์มบัญชีดิจิตอล “Accounting
          E-Transfer” เพื่อให้ผู้ประกอบการรุ่นใหม่ได้ใช้งานจริงและเรียนรู้ระบบและระเบียนต่างๆ
          ทางบัญชี-การเงิน กฎหมาย-ภาษี และความรู้ทางด้านธุรกิจ
          ผ่านแพลทฟอร์มบัญชีของเราครบวงจรสะดวกสบายเท่าทันสภาวะปัจจุบัน
        </li>
        <li>
          เรายังมีโปรเจคอีกมากมายที่จะลงให้บริการ ณ ศูนย์ที่เปิดไปแล้วทั่วประเทศมีรายได้ต่อเนื่อง
          เอ็นบีเอฯ มุ่งมันและสร้างสรรค์ สร้างแพลทฟอร์มแพลทฟอร์ม (platform)
          เครื่องมืออันทรงพลังที่จะสานต่อธุรกิจของศูนย์ในเป็นจริง เน้นสร้างรายได้ที่แท้จริง
          ต้นทุนต่ำ ตามนโนบายผู้บริหาร ตามสโลแกน (ที่เดียวครบ-จบที่เรา-จบทุกบริการ)
          รวมทั้งสานต่อปณิธานผู้บริหารสืบเนื่องมาจนถึงปัจจุบัน (สร้างเงิน-สร้างงาน-สานต่ออาชีพ)
        </li>
        <li>
          เราหวังเป็นอย่างยิ่งว่าจะได้เคียงคู่ประเทศไทยและชุมชนเป็นศูนย์กลางในการพัฒนาระบบ
          แพลทฟอร์มที่ให้บริการครบวงจรทุกด้านต่อไป
        </li>
      </div>
    </Container>
  );
}

export default BuiltByDevelopers;
