import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/66d4d00c61ee1f800addbf41055ff682~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=04f529f6&x-expires=1748505600&x-signature=mPIcL02pj5UYKWduT3Qj2zykYRw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Anh"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Duc Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenducanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
