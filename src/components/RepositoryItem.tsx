import { Repository } from './RepositoryList';

interface RepositoryItemProps {
  repository: Repository;
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
