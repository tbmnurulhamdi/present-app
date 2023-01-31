import moment from 'moment';
// moment().format();
import 'moment/locale/id';
moment.locale('id');

const now = moment();


module.exports = {
    get: function(con, callback) {
        con.query(`SELECT id, users.id AS name, time 
                    FROM presensi 
                    WHERE date = ? AND validaate = ?
                    JOIN users ON presensi.id_user = user.id`, [now, false], callback)
    },



    
    users: function(con, callback) {
        con.query(`SELECT * FORM users`, callback)
    }
}