export default function Footer() {
  return (
    <footer className="footer footer-center bg-blue-500 text-primary-content p-10">
      <aside>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.25 22h19.5M4 22V6.978c0-1.743 0-2.614.327-3.28A3.06 3.06 0 0 1 5.638 2.34C6.28 2 7.12 2 8.8 2h.4c1.68 0 2.52 0 3.162.34a3.06 3.06 0 0 1 1.311 1.359C14 4.364 14 5.235 14 6.978V22M10 6H8m2 4H8m2 4H8m11.8 8V11.444c0-2.305-.798-3.148-2.925-3.148H14"
          />
        </svg>
        <p className="font-bold">
          amortify
          <br />
          Created by{" "}
          <a href="https://www.manuelalferez.com/" target="_blank">
            Manuel Alférez
          </a>
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/manuelalferez" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
