export default function ProjectCard() {
  return (
    <div
      className="w-[430px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border-transparent
    hover:border-secondary"
    >
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img
          src="./img-teste.png"
          alt="projeto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase font-bold text-xs text-accent-green">
          10 cliques
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold">Projeto 1</span>
          <span className="text-content-body text-sm">
            Descrição super detalhada do que o projeto faz
          </span>
        </div>
      </div>
    </div>
  );
}
