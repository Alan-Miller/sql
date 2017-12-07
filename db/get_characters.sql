select username || ' is in ' || story_name 
from characters c join story s on c.story = s.id
where leader is false order by c.id asc;