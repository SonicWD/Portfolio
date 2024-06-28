const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4">
          {/* Coloca aquí tu imagen */}
          <img className="rounded-full" src="/profile-image.jpg" alt="Profile" />
        </div>
        <div>
          {/* Aquí coloca tus detalles personales */}
          <h2 className="text-lg font-semibold">Tu Nombre</h2>
          <p>Descripción breve</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

