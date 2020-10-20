package cn.plutonight.library.service;

import cn.plutonight.library.entity.Seat;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author LPH
 * @since 2020-10-18
 */
public interface ISeatService extends IService<Seat> {

    /**
     * 检查该学生座位使用时间 (如果 没有坐下或暂离 则返回 0)
     * @param studentId
     * @Return int
     * @Author LPH
     */
    int checkTime(Long studentId);

    /**
     * 结合各表检查座位是否真正能够坐下
     * @Method checkSeat
     * @param row
     * @param col
     * @param roomId
     * @Return int (Seat.STATUS)
     * @Exception
     * @Author LPH
     * @Version 1.0
     */
    int checkSeat(Long roomId, int row, int col);
}
