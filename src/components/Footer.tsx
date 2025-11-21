export default function Footer() {
  return (
    <footer className="bg-card text-muted p-8 mt-12 border-t border-border">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} NEXORA News. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          Feito com <span className="text-red-500">&hearts;</span> em Portugal.
        </p>
      </div>
    </footer>
  );
}
