import { QueryKeyConst } from '@/constants/query-key';
import { LeakDetailsService } from '@/services/leakDetails';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';


export const useQueryLeakData = (
 options: UseQueryOptions<any, unknown, any>,
): UseQueryResult<any, unknown> => useQuery<any, unknown>(
 [ QueryKeyConst.GET_LEAK_DATA],
 () => LeakDetailsService.getLeakData(),
 options,
);