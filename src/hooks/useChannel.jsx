
import { useState, useEffect } from'react';
import { getChannelAPI } from '@/apis/article';

function useChannel() {
    const [channelList, setChannelList] = useState([]);

    const getChannelList = async () => {
        const res = await getChannelAPI()
        setChannelList(res.data.channels)
    }
    useEffect(() => {
        getChannelList()
    }, [])
    return { channelList };
}
export { useChannel };