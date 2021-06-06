import style from './styles.module.scss';

interface subscribeButtonProps {
    priceId: string;
}


export function SubscribeButton({ priceId }: subscribeButtonProps) {
    return (
        <button
            type="button"
            className={style.subscribeButton}>
            Subscribe Now
        </button>
    )
}