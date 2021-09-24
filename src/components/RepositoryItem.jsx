
export function RepositoryItem(props){
  return (
    <li>
      <strong>{props.repository.name ?? 'texto padrao'}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>
        Acessar repositorio
      </a>
    </li>
  )
}