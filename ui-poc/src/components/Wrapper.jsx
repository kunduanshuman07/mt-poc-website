import React from 'react';
import SkeletonDrop from './SkeletonDrop';

const Wrapper = ({ children, skeletonHeight, skeletonTitle, loading, error, noData }) => {
    // if (loading) return <SkeletonDrop height={skeletonHeight} title={skeletonTitle} error={error} noData={noData} loading={loading}/>
    // if (error) return <SkeletonDrop height={skeletonHeight} title={`Error while ${skeletonTitle}`} error={error} noData={noData} loading={loading}/>;
    // if (noData) return <SkeletonDrop height={skeletonHeight} title={`No data found while ${skeletonTitle}`} error={error} noData={noData} loading={loading}/>;
    return (
        <>
            {children}
        </>
    );
};

export default Wrapper;
