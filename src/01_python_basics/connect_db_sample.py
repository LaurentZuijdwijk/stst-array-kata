import psycopg2

# create a connection to the redshift db
con = psycopg2.connect(dbname='mercury_dev'
                    , user='katauser'
                    , password='Kata1234'
                    , host='dev-cluster.cnxohrjczoor.eu-west-1.redshift.amazonaws.com'
                    , port='5439')

# get a cursor from the db connection
cur = con.cursor()

# construct sql query
sqlquery = "select first_name, last_name, age from public.user_details;"

# execute the query
cur.execute(sqlquery)

# put the results into a list variable
rows = cur.fetchall()

# loop through the columns
for row in rows:
    print("{0} {1} is {2} years old.".format(row[0],row[1],row[2]))

# close cursor
cur.close()

# close connection
con.close()
