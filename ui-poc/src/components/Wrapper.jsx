import React from 'react';
import SkeletonDrop from './SkeletonDrop';

const Wrapper = ({ children, skeletonHeight, skeletonTitle, loading, error }) => {
    // if (loading) return <SkeletonDrop height={skeletonHeight} title={skeletonTitle} />
    // if (error) return <SkeletonDrop height={skeletonHeight} title={"Error Loading Page"} />;

    return (
        <>
            {children}
        </>
    );
};

export default Wrapper;
