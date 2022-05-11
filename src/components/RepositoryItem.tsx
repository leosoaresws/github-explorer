interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    url: string;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository?.name}</strong>
      <p>{repository?.description}</p>

      <a href={repository?.url}>Acessar repositório</a>
    </li>
  );
}
