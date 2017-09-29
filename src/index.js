module.exports = function check(str, bracketsConfig) {
  //создаём массив символов из строки
  var ms_str = [];
  for(var i = 0; i < str.length; i++)
  {
     ms_str.push(str[i]);
  }

  //идём по строке и ищем первую пару скобок, которая при открытии тут же закрывается
  var i;
  var bracket;// для хранения открывающей скобки
  /**/var bracket_open;// для хранения открывающей скобки
  var bracket_close;// для хранения закрывающей скобки*/
  var type_of_bracket; // тип скобок
  var config_check; // флаг для определения типа скобки
  var equal_bracket;//флаг для одинаковых скобок

  for(i = 0; i < ms_str.length-1; i++)//непосредственное передвижение по массиву
  {
    config_check = false;
    bracket = ms_str[i];
        for(type_of_bracket = 0; type_of_bracket < bracketsConfig.length; type_of_bracket++)//определение типа скобки
        {

          bracket_open = bracketsConfig[type_of_bracket][0];//открывающая скобка
          bracket_close = bracketsConfig[type_of_bracket][1];//закрывающая скобка

          if(bracket_open != bracket_close) // для config, где открывающая скобка и закрывающая неодинаковы
          {
              equal_bracket = false;
              if(bracket == bracket_open)
              {
                config_check = true;
                break;
              }

              else if (bracket == bracket_close)
              {
                break;
              }
          }
          else// для config, где открывающая скобка и закрывающая одинаковы
          {
              equal_bracket = true;
              if(bracket == bracket_open)
              {
                config_check = true;
                break;
              }
          }
        }
    if(config_check == false)//если мы наткнулись на закрывающуюся скобку без подобной открытой
    {
      return false;
    }

    if(bracket_close == ms_str[i+1])
    {
      ms_str.splice(i, 2);//удалени 2 элементов начиная с i-го и смещение "хвоста" массива влево
      if(i == 0 )//если удаление начинается с начала массива
      {
        i = -1;
      }
      else
      {
        i = i - 2;
      }
    }

  }

  if(ms_str.length == 0)
  {
    return true;
  }
  else
  {
      return false;
  }

}
