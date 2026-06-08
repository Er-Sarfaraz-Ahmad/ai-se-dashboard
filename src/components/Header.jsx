function Header() {
  return (
    <div className="text-center px-2 sm:px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        AI SEO Audit
        <br className="sm:hidden" />
        Dashboard
      </h1>

      <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
        Analyze websites and get
        SEO insights instantly
      </p>
    </div>
  );
}

export default Header;