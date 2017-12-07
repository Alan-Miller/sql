select username || ' is the leader of ' || team || ' in ' || story_name 
from characters c join story s on c.story = s.id
where leader is true order by c.id asc;