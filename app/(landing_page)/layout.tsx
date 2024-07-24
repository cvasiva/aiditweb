
import DivcCPVDp from '../_shared/components/home/homecomponents/divc-c-p-v-dp';
import DivcCPVDp1 from '../_shared/components/home/homecomponents/divc-c-p-v-dp1';
import Main from '../_shared/components/home/homecomponents/main';
import '../globals.css'
import layoutStyles from "./layout.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: 'AIDIT',
  description: '',
}

export default function RestaurantLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-[#FFFFFF]">
        <div className="w-full bg-white">
          <Main />
          {children}
          <section className={layoutStyles.footer}>
            <DivcCPVDp1 />
            <DivcCPVDp />
          </section>
        </div>
      </body>
    </html >
  )
}
