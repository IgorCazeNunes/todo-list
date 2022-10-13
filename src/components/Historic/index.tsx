import { MouseEvent } from 'react';
import { IHistoric } from '../../common/interfaces';

import './styles.css';

const Historic = ({ historicList, setHistoricList }: IHistoric) => {

    const handleCleanHistoric = (event: MouseEvent) => {
        event.preventDefault();
        setHistoricList([]);
    }

    return (
        <section className="historic">
            <div>
                <h2>Histórico</h2>

                {historicList.length ?
                    <button
                        type="button"
                        className="btn-delete"
                        onClick={handleCleanHistoric}
                    >
                        Limpar Histórico
                    </button>
                    : null
                }
            </div>

            <ul>
                {!historicList.length ? (
                    <li className="warning">
                        Nenhuma atividade no histórico!
                    </li>
                ) : (
                    historicList.map((todo, index) => (
                        <li key={`${todo}-${index}`}>
                            {todo}
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
}

export default Historic;
