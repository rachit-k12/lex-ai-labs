export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-slate-100 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Alumni & Mentors From
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            Google
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Meta
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 0v11.408h11.408V0H0zm12.594 0v11.408H24V0H12.594zM0 12.594V24h11.408V12.594H0zm12.594 0V24H24V12.594H12.594z" />
            </svg>
            Microsoft
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.516.61-2.265 0-4.463-.405-6.6-1.205-2.118-.79-3.982-1.94-5.59-3.444-.12-.116-.18-.226-.18-.336 0-.11.046-.197.135-.266.088-.068.18-.102.265-.102zm23.71-5.085c.088.095.117.226.088.39-.047.283-.17.528-.366.733-.195.208-.455.375-.78.506-.5.196-1.006.324-1.518.39-.51.066-1.005.09-1.486.09-2.447 0-4.76-.69-6.94-2.07-.177-.114-.266-.25-.266-.414 0-.15.088-.27.265-.36.176-.092.344-.077.503.05 1.65 1.11 3.478 1.665 5.485 1.665.684 0 1.355-.066 2.01-.196.657-.13 1.24-.325 1.753-.586.088-.052.213-.096.375-.13.162-.036.3-.004.414.095z" />
            </svg>
            Amazon
          </div>
        </div>
      </div>
    </section>
  );
}

