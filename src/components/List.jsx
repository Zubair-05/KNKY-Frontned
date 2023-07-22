import React from 'react'
import { useRecoilState } from 'recoil'
import { activeFilter } from '../components/atoms'

const List = () => {

    const [filter, setFilter] = useRecoilState(activeFilter);

    return (
        <div className="flex bg-[#F5F5F6] py-1">
            <button
                className={filter === 'featured' ? 'button-active' : 'button-default'}
                onClick={() => setFilter('featured')}
            >
                Featured
            </button>
            <button
                className={filter === 'fresh' ? 'button-active' : 'button-default'}
                onClick={() => setFilter('fresh')}
            >
                Fresh
            </button>
            <button
                className={filter === 'subscribed' ? 'button-active' : 'button-default'}
                onClick={() => setFilter('subscribed')}
            >
                Subscribed
            </button>
            <button
                className={filter === 'interested' ? 'button-active' : 'button-default'}
                onClick={() => setFilter('interested')}
            >
                Interested
            </button>
            <button
                className={filter === 'following' ? 'button-active' : 'button-default'}
                onClick={() => setFilter('following')}
            >
                Following
            </button>
        </div>
    )
}

export default List