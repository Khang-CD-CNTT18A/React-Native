# BAI 07 - BOOKING APP

## 1. Giới thiệu

BookingApp là ứng dụng đặt lịch chăm sóc xe được xây dựng bằng React Native và Expo.

Ứng dụng mang tên **LMK AUTO CARE**, hỗ trợ khách hàng lựa chọn dịch vụ và đặt lịch trực tuyến.

## 2. Chức năng chính

- Hiển thị danh sách dịch vụ chăm sóc xe.
- Xem thông tin chi tiết từng dịch vụ.
- Nhập tên khách hàng.
- Chọn ngày và giờ đặt lịch.
- Hiển thị thông tin đặt lịch.
- Xác nhận đặt lịch thành công.
- Quay về trang chủ sau khi hoàn tất.

## 3. Công nghệ sử dụng

- React Native
- Expo
- React Navigation
- JavaScript

## 4. Cấu trúc thư mục

```text
Bt07/
├── App.js
├── readme.md
├── components/
│   ├── ServiceCard.js
│   ├── DateSelector.js
│   ├── TimeSlot.js
│   └── BookingSummary.js
├── screens/
│   ├── HomeScreen.js
│   ├── ServiceDetailScreen.js
│   ├── BookingScreen.js
│   └── ConfirmationScreen.js
└── images/
```

## 5. Mô tả các màn hình

- **HomeScreen:** Hiển thị trang chủ và danh sách dịch vụ chăm sóc xe.
- **ServiceDetailScreen:** Hiển thị thông tin chi tiết dịch vụ.
- **BookingScreen:** Nhập tên khách hàng, chọn ngày và giờ đặt lịch.
- **ConfirmationScreen:** Hiển thị thông tin và thông báo đặt lịch thành công.

## 6. Mô tả các Component

- **ServiceCard:** Hiển thị hình ảnh, tên, thời gian và giá dịch vụ.
- **DateSelector:** Cho phép khách hàng chọn ngày đặt lịch.
- **TimeSlot:** Cho phép khách hàng chọn khung giờ.
- **BookingSummary:** Hiển thị thông tin đặt lịch đã chọn.

## 7. Kiến thức áp dụng

- Stack Navigation.
- Truyền dữ liệu bằng Route Params.
- Sử dụng Props.
- Sử dụng useState.
- Sử dụng TextInput và Pressable.
- Xử lý sự kiện và điều hướng giữa các màn hình.

## 8. Hình ảnh minh họa 

### 8.1. Giao diện
![alt text](Bai02.bt07.1.jpg)

### 8.2. Danh sách dịch vụ
![alt text](Bai02.bt07.2.jpg)

### 8.3. Đặt lịch
![alt text](Bai02.bt07.3.jpg)

### 8.4. Xác nhận đặt lịch
![alt text](Bai02.bt07.4.jpg)

## 9. Thông tin sinh viên

- **Họ và tên:** Lâm Minh Khang
- **Lớp:** CNTT18A
- **Trường:** Cao đẳng Kỹ thuật Công nghệ Nha Trang
- **Bài tập:** Bai02 - Bt07

## 10. Kết luận

Ứng dụng BookingApp giúp vận dụng kiến thức React Native để xây dựng ứng dụng nhiều màn hình, quản lý dữ liệu và thực hiện chức năng đặt lịch chăm sóc xe cơ bản.
