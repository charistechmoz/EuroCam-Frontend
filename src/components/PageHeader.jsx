// components/PageHeader.jsx
export default function PageHeader({
  image,
  title,
  subtitle,
  height = "h-[280px] md:h-[480px]", // altura reduzida, ajustável por página
}) {
  return (
    <header className={`relative w-full ${height} overflow-hidden`}>
      {/* Imagem de fundo — ocupa 100% da largura e altura do container */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Camada sólida semi-transparente para legibilidade — sem gradiente */}
      <div className="absolute inset-0 bg-[#0a1f4d]/55" />

      {/* Faixa dourada fina no topo, assinatura de marca */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#c9a227]" />

      {/* Texto alinhado ao início, não centrado */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="px-6 md:px-16 pb-8 md:pb-0 max-w-3xl">
          {subtitle && (
            <p className="text-[#c9a227] text-sm md:text-base font-semibold tracking-wide uppercase mb-2">
              {subtitle}
            </p>
          )}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}