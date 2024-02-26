const Welcome = ({ msg }) => {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-gray-700">
            Bienvenue sur la page
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
            {msg}
          </h1>
        </div>
      </main>
    </>
  );
};

export default Welcome;
