import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-black text-gray-900 text-lg">
              Tools <span className="text-orange-500">Pro</span> Maroc
            </span>
            <span className="text-gray-400 text-xs" dir="rtl">تولز برو المغرب</span>
          </div>

          {/* Bosch badge */}
          <div className="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-2.5">
            <Image src="/bosch.svg" alt="Bosch" width={52} height={17} className="h-[17px] w-auto" />
            <div className="h-4 w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-[10px] text-gray-500 font-semibold leading-none">Distributeur officiel</p>
              <p className="text-[10px] text-gray-400 leading-none mt-0.5" dir="rtl">موزع رسمي معتمد</p>
            </div>
          </div>

          {/* Meta */}
          <p className="text-gray-400 text-xs text-center sm:text-right">
            © {new Date().getFullYear()} Tools Pro Maroc<br />
            Outillage Bosch Professionnel · المغرب
          </p>
        </div>
      </div>
    </footer>
  );
}
