export default function Home() {
  return (
    <main className="p-4 font-sans">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">ChosenPeople Portal</h1>
        <nav className="mt-2 flex gap-4">
          <a href="#" className="text-blue-500 hover:underline">Афиша</a>
          <a href="#" className="text-blue-500 hover:underline">Заведения</a>
          <a href="#" className="text-blue-500 hover:underline">Активности</a>
          <a href="#" className="text-blue-500 hover:underline">Новости</a>
          <a href="#" className="text-blue-500 hover:underline">Команда</a>
        </nav>
      </header>
      <section>
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700">Выбери город:</label>
        <select id="city" className="p-2 border rounded">
          <option>Москва</option>
          <option>Санкт-Петербург</option>
          <option>Казань</option>
          <option>Новосибирск</option>
        </select>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Мероприятия</h2>
        <div className="flex gap-4 overflow-x-auto">
          <div className="min-w-[200px] bg-white shadow rounded p-4">Карточка 1</div>
          <div className="min-w-[200px] bg-white shadow rounded p-4">Карточка 2</div>
          <div className="min-w-[200px] bg-white shadow rounded p-4">Карточка 3</div>
        </div>
      </section>
    </main>
  );
}