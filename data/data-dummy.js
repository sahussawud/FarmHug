import Farm from "../models/farms";
import User from "../models/user";
import Animal from "../models/animal";
import Stall from "../models/stall";

export const FARMS = [
    new Farm("f1", "ฟาร์มสุขใจ1", "0.1", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f2", "ฟาร์มสุขใจ2", "0.2", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f3", "ฟาร์มสุขใจ3", "0.1", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f4", "ฟาร์มสุขใจ4", "0.2", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f5", "ฟาร์มสุขใจ5", "0.1", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
    new Farm("f6", "ฟาร์มสุขใจ6", "0.2", 35.4,"168/65 ต.หนองวัว อ.ดอเราะ จ.สงขลา","https://www.organicfarmthailand.com/wp-content/uploads/2016/09/Farm-from-a-Box-SMA.jpg", [101,50], "Fri Oct 23 2020 12:47:26 GMT+0700 (Indochina Time)"),
  ];

  export const STALLS = [
    new Stall(1, 'คอก 1', 'f1', 2, 10),
    new Stall(2, 'คอก 2', 'f1', 2, 10),
    new Stall(3, 'คอก 1', 'f2', 2, 10),
    new Stall(4, 'คอก 2', 'f2', 2, 10),
  ];

  export const ANIMALS = [
    new Animal(1,'วัวเนื้อ 1', 'วัวเนื่อ', 1, 'f1', 'บรามัน', 20, 20, 'วัวไทย', 'M', '', ''),
    new Animal(2,'วัวเนื้อ 2', 'วัวเนื่อ', 1, 'f1', 'บรามัน', 20, 20, 'วัวไทย', 'F', '', ''),
    new Animal(3,'วัวเนื้อ 3', 'วัวเนื่อ', 3, 'f2', 'บรามัน', 20, 20, 'วัวไทย', 'M', '', ''),
    new Animal(4,'วัวเนื้อ 4', 'วัวเนื่อ', 3, 'f2', 'บรามัน', 20, 20, 'วัวไทย', 'F', '', ''),
  ];